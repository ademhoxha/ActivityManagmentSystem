var dbAPI = require('../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var otpUtils = require('../sourceCode/otpUtils/otpUtils').OTPUtils;

var otpManager = dbAPI.getOtpManagerEntity();

var dataAndTime = otpUtils.getDateAndTime();
console.log(dataAndTime.date);
console.log(dataAndTime.time);
var data = {}
data.query = {
    date: dataAndTime.date,
    mail : dataAndTime.time.toString()+'@hotmail.it'
}

main()

function main() {
    //insert();
    //find();
    //remove();
    //update();
    updateNotExsist()
}

function insert() {
    otpManager.insert(data, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function find() {
    
    otpManager.find(data, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function remove() {
    otpManager.remove(data, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function update() {
    var updateData = {};
    updateData.query = {
        date: dataAndTime.date,
    }
    updateData.update = {
        mail : dataAndTime.time.toString()+'@hotmail.it',
        total : 3254
    }
    otpManager.update(updateData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}

function updateNotExsist() {
    var updateData = {};
    updateData.query = {
        date: Date.now(),
    }
    updateData.update = {
        mail : dataAndTime.time.toString()+'@hotmail.it',
        total : 3254
    }
    otpManager.update(updateData, (err, ret) => {
        if (err)
            console.log("ERROR " + err)
        else
            console.log("OOOK " + ret)
    })
}