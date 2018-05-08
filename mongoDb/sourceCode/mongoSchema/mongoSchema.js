// mongoSchema
function mongoSchema() {
}

mongoSchema.prototype.getModel = function(mongoose) {
    callback("No implementation");
}

mongoSchema.prototype.add = function(data, callback) {
    callback("No implementation");
}

mongoSchema.prototype.update = function(data, callback){
    callback("No implementation");
}

mongoSchema.prototype.search = function(data, callback){
    callback("No implementation");
}

mongoSchema.prototype.delete = function(data, callback){
    callback("No implementation");
}

mongoSchema.prototype.validateData = function(data){
    return true;
}

mongoSchema.prototype.execAdd = function(data, query, callback){
    var mongoUtils = require("../mongoDB/PrototypeMogoUtils");
    let mongo = new mongoUtils.mongoUtils(this);
    mongo.insert(data, query, callback);
}

mongoSchema.prototype.execFind = function(data, query, callback){
    var mongoUtils = require("../mongoDB/PrototypeMogoUtils");
    let mongo = new mongoUtils.mongoUtils(this);
    mongo.find(data, query, callback);
}

mongoSchema.prototype.execDel = function(data, query, callback){
    var mongoUtils = require("../mongoDB/PrototypeMogoUtils");
    let mongo = new mongoUtils.mongoUtils(this);
    mongo.remove(data, query, callback);
}

module.exports = {
    mongoSchema : mongoSchema
}
