var SecretEntityPrototype = require('./secretEntityPrototype').SecretEntityPrototype;
const dbConfig = require('../config/dbConfig');

class SecretUserEntity extends SecretEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'User';
        data.parameters = ["password", "authToken"]; // list of parameters to crypt
        //data.password = "" // use standard key of crypto api
        super(data);
    }

    insert(data, callback) {
        var newData = generatePKey(data); // generate the correctPkey
        super.insert(newData, callback);
    }

    find(data, callback) {
        var newData = emailOrPhone(data);
        super.find(newData, callback);
    }

    remove(data, callback) {
        var newData = emailOrPhone(data);
        super.remove(newData, callback);
    }

    update(data, callback) {
        var newData = emailOrPhone(data);
        super.update(newData, callback);
    }

    findByPKey(data, callback){
        var findData = generatePKey(data);
        super.find({ query : { pKey : findData.query.pKey}} , callback);
    }
}

function generatePKey(data) {
    var newData = data;
    newData.query.pKey = "start-email:" + newData.query.email + ";mobilephone:" + newData.query.mobilephone + "-end";
    return newData;
}

function emailOrPhone(data) {
    var newData = data;
    if (data.query.email && !String(data.query.email).match(/.*@.*/)) {
        newData.query.mobilephone = data.query.email;
        delete newData.query.email;
    }
    return newData;
}

module.exports = {
    SecretUserEntity: SecretUserEntity
}