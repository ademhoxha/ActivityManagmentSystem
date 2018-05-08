var dbApi = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var otpManager = dbApi.getOtpManagerEntity();
var otpReceiver = dbApi.getOtpReceiverEntity();
var config = require('../../config/config');

class OTPUtils {
    getDateAndTime() {
        return extGetDateAndTime();
    }

    getRandomInt() {
        return extGetRandomInt();
    }

    canSendOTP(data, callback) {
        /*this.verifyOtpCode(data, (err, ret) => {
            if(ret && ret.code)
            return callback("OTP code is still valid, use prevoius one")*/
            if (config.isOtpLimited)
                return canSendOTPStartFlow(data, callback);
            return callback(undefined, true)
       // });
    }

    verifyOtpCode(data, callback) {
        return verifyOTPStartFlow(data, callback);
    }

}

var istance = new OTPUtils();

module.exports = {
    OTPUtils: istance
}


function extGetDateAndTime() {
    var now = new Date();
    var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var time = now.getTime();
    return {
        date: date,
        time: time
    }
}

function extGetRandomInt() {
    var min = Math.ceil(111111);
    var max = Math.floor(999999);
    return Math.floor(Math.random() * (max - min)) + min;
}


/***************************** START =>  CAN SEND OTP   *****************************/
function canSendOTPStartFlow(data, callback) {
    var findData = { query: { date: extGetDateAndTime().date } }
    otpManager.find(findData, (err, ret) => {
        if (err)
            return callback(err);
        return updateOTPManager(data, ret, callback);
    });

}

function updateOTPManager(data, manager, callback) {
    if (!manager || !manager[0] || (extGetDateAndTime().time - manager[0].lastTime > (1000 * 60 * config.otpResendMinutes))) {
        var insertData = {
            query: {
                date: extGetDateAndTime().date,
                mail: data.receiver
            }
        }
        return otpManager.insert(insertData, (err, ret) => {
            if (err)
                return callback(err)
            return updateOTPReceiver(data, ret, callback)
        })
    }
    else {
        return callback("Otp Mail has a limit time, plase try again in a few minutes");
    }
}

function updateOTPReceiver(data, manager, callback) {
    var insertData = {}

    // must be use manager.date and not manager[0].date because it is coming from insert and not from find
    insertData.query = {
        receiver: data.receiver,
        otp: {
            code: data.codeNumber,
            date: manager.date,
            time: manager.lastTime
        }
    }
    otpReceiver.insert(insertData, (err, ret) => {
        if (err)
            return callback(err);
        return callback(undefined, ret);
    })
}
/***************************** END =>  CAN SEND OTP   *****************************/

/***************************** START =>  VERIFY OTP   *****************************/
function verifyOTPStartFlow(data, callback) {
    var findData = { query: { receiver: data.receiver } };
    otpReceiver.find(findData, (err, ret) => {
        if (err)
            return callback(err);

        if (!ret || !ret[0])
            return callback("Not found an otp associated to this receiver " + data.receiver);

        if (extGetDateAndTime().time - ret[0].otp.time > (1000 * 60 * config.otpValidityMinutes))
            return callback("OTP expired, require a new OTP");

        if (ret[0].otp.code != data.code)
            return callback("Wrong OTP Number");

        return callback(undefined, data.code);
    })
}
/***************************** END =>  VERIFY OTP   *****************************/