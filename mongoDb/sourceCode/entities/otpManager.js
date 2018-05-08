var mongoCrudOperations = require('../mongoDB/mongoCrudOperations').mongoCrudOperations;
var mongooseProxy = require('../mongoDB/mongooseProxy').mongooseProxy;
var BaseEntityPrototype = require('./baseEntityPrototype').BaseEntityPrototype;
const dbConfig = require('../config/dbConfig');

class otpManager extends BaseEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'otpManager';
        super(data);
    }

    insert(data, callback) {
        var now = new Date();
        var time = now.getTime();

        var findData = { query: { date: data.query.date } }

        super.find(findData, (err, info) => {
            if (err)
                return callback(err)
            else if (info && info[0]) {
                var updateData = info[0];
                updateData.oldData = data;
                var newUpdateData = dataForUpdating(updateData);
                newUpdateData.update.lastTime = time; // set lastTime
                return super.update(newUpdateData, callback);
            }
            var insertData = { query: {} }
            insertData.query.total = 1;
            insertData.query.date = data.query.date;
            insertData.query.mailList = [];
            insertData.query.mailList.push(data.query.mail);
            insertData.query.lastTime = time; // set lastTime
            return super.insert(insertData, callback);
        });
    }

    find(data, callback) {
        var findData = { query: { date: data.query.date } }
        super.find(findData, callback);
    }

    remove(data, callback) {
        var findData = { query: { date: data.query.date } }
        super.remove(findData, callback);
    }

    update(data, callback) {
        var insertData = { query: data.update }
        insertData.query.date = data.query.date;
        return this.insert(insertData, callback);
    }

}

function dataForUpdating(inputData) {
    var mailList = inputData.mailList
    mailList.push(inputData.oldData.query.mail);
    var updateDate = {};
    updateDate.update = {
        total: inputData.total + 1,
        mailList: mailList
    }
    updateDate.query = { date: inputData.date }
    return updateDate;
}

module.exports = {
    otpManager: otpManager
}