var dbApi = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var OtpUtils = require('../otpUtils/otpUtils').OTPUtils;
class IOtpApi {

    configOtp(data) { }

    sendOtp(data, callback) { 
        return OtpUtils.canSendOTP(data, callback);
    }

    generateOTP() { 
        return OtpUtils.getRandomInt(); 
    }

    verifyOtp(data, callback) { 
        return OtpUtils.verifyOtpCode(data, callback);
    }

    resetOtp(data, callback) { }
}

module.exports = {
    IOtpApi: IOtpApi
}