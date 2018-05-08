var mongoCrudOperations = require('../mongoDB/mongoCrudOperations').mongoCrudOperations;
var mongooseProxy = require('../mongoDB/mongooseProxy').mongooseProxy;
var BaseEntityPrototype = require('./baseEntityPrototype').BaseEntityPrototype;
const dbConfig = require('../config/dbConfig');

class OtpReceiver extends BaseEntityPrototype{

    constructor(){
        var data = {}
        data.dbName =  dbConfig.userDbName
        data.schemaName = 'OtpReceiver';
        super(data);
    }

    insert(data, callback) {
        var findData = { query : {receiver : data.query.receiver}}
        
        super.find(findData, (err, info) => {
            if(err)
                return callback(err)
            else if(info  && info[0]){
                findData.update = {otp : {
                    code : data.query.otp.code,
                    date : data.query.otp.date,
                    time : data.query.otp.time
                }}
                return super.update(findData, callback);
            }
            return super.insert(data, callback);
        });
    }

    find(data, callback) {
        super.find(data, callback);
    }

    remove(data, callback) {
        super.remove(data, callback);
    }

    update(data, callback) {
        var insertData = {query : data.update};
        insertData.query.receiver = data.query.receiver;
        return super.insert(insertData, callback);
    }

}

module.exports = {
    OtpReceiver : OtpReceiver
}