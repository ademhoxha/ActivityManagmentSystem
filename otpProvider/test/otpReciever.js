var dbAPI = require('../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var otpUtils = require('../sourceCode/otpUtils/otpUtils').OTPUtils;

var otpReceiver = dbAPI.getOtpReceiverEntity();
var otpManager = dbAPI.getOtpManagerEntity();

var dataAndTime = otpUtils.getDateAndTime();
console.log(dataAndTime.date);
console.log(dataAndTime.time);
var data = {}
data.query = {
    receiver: "adem.hoxha@hotmail.it",
    otp: {
        code: otpUtils.getRandomInt(),
        date: dataAndTime.date,
        time: dataAndTime.time
    }
}

mainReceiver()

function mainReceiver() {
    //insert();
    find();
    //remove();
    //update();
    //updateNotExsist()
}

function insert() {
    otpReceiver.insert(data, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function find() {
    findData = { query : {receiver : data.query.receiver}}
    
    otpReceiver.find(findData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function remove() {
    var removeData = {};
    removeData.query = {
        receiver : data.query.receiver
    }
    otpReceiver.remove(removeData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function update() {
    var updateData = {};
    updateData.query = {
        receiver : data.query.receiver
    }
    updateData.update = {
        receiver: "adem.hoxha@hotmail.it",
       /* otp: {
            code: otpUtils.getRandomInt(),
            date: dataAndTime.date,
            time: dataAndTime.time
        }*/
    }
    otpReceiver.update(updateData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function updateNotExsist() {
    var updateData = {};
    updateData.query = {
        receiver : "adem.hoxha1@hotmail.it"
    }
    updateData.update = {
        receiver: "adem.hoxha1@hotmail.it",
        otp: {
            code: otpUtils.getRandomInt(),
            date: dataAndTime.date,
            time: dataAndTime.time
        }
    }
    otpReceiver.update(updateData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}