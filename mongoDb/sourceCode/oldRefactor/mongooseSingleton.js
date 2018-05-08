var mongoose = require('mongoose');
var mongooseSchema = require('./mongooseSchema').mongooseSchema;
var mongooseInstance;
var isConnected = false;

class mongooseSingleton {
    constructor(data) {
        if (!mongooseInstance) {
            mongooseInstance = new mongoose.Mongoose();
            mongooseInstance.connect(data.dbName);
            isConnected = false;
            this.data = data;
        }
    }

    getConnection() {
        return mongooseInstance;
    }

    getDb() {
        return mongooseInstance.connection;
    }

    openConnection(callback) {
        if (!isConnected) {
            isConnected = true;
            this.getDb().on('error', function () {
                isConnected = false;
                callback("Can't Get Connection to Mongo");
            });
            this.getDb().once('open', function () {
                callback(null, 'Connection Open');
            });
        }
    }

    closeConnection(callback) {
        mongooseInstance.disconnect();
        callback(null, 'Connection Closed');
    }

}
module.exports = {
    mongooseSingleton: mongooseSingleton,

}