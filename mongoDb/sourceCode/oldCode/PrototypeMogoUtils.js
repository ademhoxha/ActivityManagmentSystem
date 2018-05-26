'use strict';

var Log = require("../log/log");
var mongoConfig = require("../config/mongoConfig");

// USER INTERFACE
function mongoUtils(mongoSchema) {
    this.mongo = new mongoCRUD(mongoSchema);
}
    
mongoUtils.prototype.insert = function(data, query, callback) {
    this.mongo.insert(data, query, callback);
}
    
mongoUtils.prototype.find = function(data, query, callback) {
    this.mongo.find(data, query, callback);
}

mongoUtils.prototype.remove = function(data, query, callback) {
    this.mongo.remove(data, query, callback);
}

// RAW INTERFACE, NOT VISIBLE TO THE USER
function mongoCRUD(mongoSchema) {
    this.moongose = undefined;
    this.db = undefined;
    this.mongoModel = undefined;
    this.mongoSchema = mongoSchema;
}

mongoCRUD.prototype.insert = function(data, query, callback) {
    this.getConnection(data, query, callback, addInMongo);
}

mongoCRUD.prototype.find = function(data, query, callback) {
    this.getConnection(data, query, callback, searchInMongo);
}

mongoCRUD.prototype.remove = function(data, query, callback) {
    this.getConnection(data, query, callback, removeInMongo);
}

mongoCRUD.prototype.getConnection = function (data, query, callback, operation) {
    // define new mongo Istance
    var Mongoose =  require('mongoose');
    this.mongoose = new Mongoose.Mongoose();
    // now we have a new mongoose istance
    this.mongoose.connect(mongoConfig.dbName);
    this.db = this.mongoose.connection;
    var cont = this;
    this.db.on('error',  function () { 
        Log.write("Can't Get Connection to Mongo");
        callback("Can't Get Connection to Mongo");
    });
    this.db.once('open', function () { 
        Log.write("Connected to Mongo"); 
        operation(cont,data, query,callback);
    });

}

mongoCRUD.prototype.closeConnection = function (callback, error, data) {
    if(error){
        this.mongoose.disconnect();
        Log.write("Connection Closed");
        callback(error, undefined);
    }
    else{
        this.mongoose.disconnect();
        Log.write("Connection Closed");
        callback(undefined, data);
    }
}

mongoCRUD.prototype.initializeModel = function () {
    if(this.mongoModel == undefined){
        this.mongoModel = this.mongoSchema.getModel(this.mongoose);
    }
}

function addInMongo(mongo, data, query, callback) {
    mongo.initializeModel();
    var element = new mongo.mongoModel(query);
    element.save(function (err, element) {
        if (err) {
            Log.write("Problem Occured in Adding Element in Mongo");
            mongo.closeConnection(callback,err, data)
        }
        else {
            Log.write("Element Correctly Added in Mongo");
            mongo.closeConnection(callback, undefined, data)
        }
    });
}

function searchInMongo(mongo,data, query, callback) {
    mongo.initializeModel();
    mongo.mongoModel.find(query, function(err,item){
        if (err) {
            Log.write("Problem Occured in Mongo Find");
            mongo.closeConnection(callback,err, undefined)
        }
        else {
            Log.write("Element Correctly Found");
            mongo.closeConnection(callback, undefined, item)
        }
    });
}

function removeInMongo(mongo,data, query, callback) {
    mongo.initializeModel();
    mongo.mongoModel.remove(query, function(err){
        if (err) {
            Log.write("Problem Occured in Mongo Remove");
            mongo.closeConnection(callback,err, undefined)
        }
        else {
            Log.write("Element Correctly Removed");
            mongo.closeConnection(callback, undefined, null)
        }
    });
}

module.exports = {
    mongoUtils : mongoUtils,
}