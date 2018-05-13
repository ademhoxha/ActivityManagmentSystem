var BaseEntityPrototype = require('./baseEntityPrototype').BaseEntityPrototype;
var cryptoAPI = require('../../../cryptoProvider/cryptoPublicApi/cryptoPublicApi');

class SecretEntityPrototype extends BaseEntityPrototype {

    constructor(data) {
        super(data);
        this.parameters = data.parameters;
        this.crypto = cryptoAPI.CTRCrypto(data);
    }

    insert(data, callback) {
        var newData = secretDataEncrypt(data, this.parameters, this.crypto);
        super.insert(newData, (err, ret) => {
            if (err)
                return callback(err);
            var retData = secretDataDecrypt(ret, this.parameters, this.crypto);
            return callback(err, retData);
        });
    }

    find(data, callback) {
        var newData = secretDataEncrypt(data, this.parameters, this.crypto);
        super.find(newData, (err, ret) => {
            if (err)
                return callback(err);
            var retData = secretDataDecrypt(ret, this.parameters, this.crypto);
            return callback(err, retData);
        });
    }

    remove(data, callback) {
        var newData = secretDataEncrypt(data, this.parameters, this.crypto);
        super.remove(newData, (err, ret) => {
            if (err)
                return callback(err);
            var retData = secretDataDecrypt(ret, this.parameters, this.crypto);
            return callback(err, retData);
        });
    }

    update(data, callback) {
        var newData = secretDataEncrypt(data, this.parameters, this.crypto);
        super.update(newData, (err, ret) => {
            if (err)
                return callback(err);
            var retData = secretDataDecrypt(ret, this.parameters, this.crypto);
            return callback(err, retData);
        });
    }

}

function secretDataEncrypt(startData, parameters, crypto) {
    var data = startData;
    parameters.forEach(element => {
        if (data.query && data.query[element]){
            console.log("**** GO QUERY Element ****  "+element)
            console.log("pre : "+data.query[element])
            data.query[element] = crypto.encrypt(data.query[element])
            console.log("post : "+data.query[element])
        }
        if (data.update && data.update[element]){
            console.log("**** GO UPDATE Element **** "+element)
            console.log("pre : "+data.update[element])
            data.update[element] = crypto.encrypt(data.update[element])
            console.log("post : "+data.update[element])
        }
    });
    return data;
}

function secretDataDecrypt(startData, parameters, crypto) {
    var returnData = startData;
    if (returnData && returnData instanceof Array) {
        returnData.forEach(data => {
            parameters.forEach(element => {
                if (data[element]){
                    console.log("**** RET NORMAL Element **** "+element)
                    console.log("pre : "+data[element])
                    data[element] = crypto.decrypt(data[element])
                    console.log("post : "+data[element])
                }
                if (data.query && data.query[element]){
                    console.log("**** RET QUERY Element **** "+element)
                    console.log("pre : "+data.query[element])
                    data.query[element] = crypto.decrypt(data.query[element])
                    console.log("post : "+data.query[element])
                }
                if (data.update && data.update[element]){
                    console.log("****RET UPDATE Element **** "+element)
                    console.log("pre : "+data.update[element])
                    data.update[element] = crypto.decrypt(data.update[element])
                    console.log("post : "+data.update[element])
                }
            });
        });
    }
    else if (returnData) {
        parameters.forEach(element => {
            if (returnData[element]){
                console.log("****RET NORMAL Element**** "+element)
                console.log("pre : "+returnData[element])
                returnData[element] = crypto.decrypt(returnData[element])
                console.log("post : "+returnData[element])
            }
            if (returnData.query && returnData.query[element]){
                console.log("****RET QUERY Element**** "+element)
                console.log("pre : "+returnData.query[element])
                returnData.query[element] = crypto.decrypt(returnData.query[element])
                console.log("post : "+returnData.query[element])
            }
            if (returnData.update && returnData.update[element]){
                console.log("****RET UPDATE Element**** "+element)
                console.log("pre : "+returnData.update[element])
                returnData.update[element] = crypto.decrypt(returnData.update[element])
                console.log("post : "+returnData.update[element])
            }
        });
    }

    return returnData;
}

module.exports = {
    SecretEntityPrototype: SecretEntityPrototype
}