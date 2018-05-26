// provaSchema implements mongoSchema
var baseSchema = require("./mongoSchema");
//var models = require("./mongoModels");

function abstractSchema (modelName, addQuery, findQuery, delQuery, validateData) {
    this.modelName = modelName;
    this.addQuery = addQuery;
    this.findQuery = findQuery; 
    this.validateData = validateData;
    this.delQuery = delQuery;
    var schema = new baseSchema.mongoSchema()
    var modelLib = require("./mongoModels");
    this.models = new modelLib.MongoModels();
    overrideMongoSchema(this,schema);
    return schema;
}

function overrideMongoSchema(abstract,schema){
    // override model
    schema.getModel = function (mongoose){
       return abstract.models.getModel(abstract.modelName, mongoose);
    }
    // override validate data
    schema.validateData = abstract.validateData;
    // override add
    schema.add = function (data, callback) {
        var check = this.validateData(data); 
        if(check){
            var query = abstract.addQuery(data);
            this.execAdd(data,query,callback);
        }
        else{
            callback("Wrong Data");
        }
    };
    // override find
    schema.find = function (data, callback) {
        var check = this.validateData(data); 
        if(check){
            var query = abstract.findQuery(data);
            this.execFind(data,query,callback);
        }
        else{
            callback("Wrong Data");
        }
    };
    // override delete
    schema.delete = function (data, callback) {
        var check = this.validateData(data); 
        if(check){
            var query = abstract.delQuery(data);
            this.execDel(data,query,callback);
        }
        else{
            callback("Wrong Data");
        }
    };
}

module.exports = {
    abstractSchema : abstractSchema
}

