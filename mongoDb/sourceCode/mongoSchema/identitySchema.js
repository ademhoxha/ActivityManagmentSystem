// identitySchema implements mongoSchema
var baseSchema = require("./mongoSchema")

var mongoModel; // schem must be defined only once!

var identitySchema = function() {
    var schema = new baseSchema.mongoSchema()
    overrideMongoSchema(schema);
    return schema;
}

var overrideMongoSchema = function(schema){
    // override model
    schema.getModel = function (mongoose){
       if(mongoose && mongoModel == undefined){
            schemaDef = mongoose.Schema({
                name: String,
                surname: String
            });
            mongoModel = mongoose.model('Identity', schemaDef)
            return mongoModel;
        }
        else if(mongoModel == undefined){
            return undefined;
        }
        else{
            return mongoModel;
        }
    }
    // override validate data
    schema.validateData = function(data) {
        if(data.name == undefined || data.name == null || data.name.trim() == "" ||
        data.surname == undefined || data.surname == null || data.surname.trim() == "" ){
            return false;
        }
        else
            return true;
    }
    // override add
    schema.add = function (data, callback) {
        var check = this.validateData(data, callback); 
        if(check){
            var query = {name : data.name.trim(), surname : data.surname.trim() };
            this.execAdd(data,query,callback);
        }
        else{
            callback("Wrong Data");
        }
    };
    // override find
    schema.find = function (data, callback) {
        var check = this.validateData(data, callback); 
        if(check){
            var query = {name : data.name.trim(), surname : data.surname.trim()};
            this.execFind(data,query,callback);
        }
        else{
            callback("Wrong Data");
        }
    };
}

module.exports = {
    identitySchema : identitySchema
}

