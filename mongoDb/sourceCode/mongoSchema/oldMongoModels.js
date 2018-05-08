var mongoose = require('mongoose');

var models = {};

var getIdentityModel = function(ExtMongoose) {
    if(models.Identity == undefined){
        var IdentitySchema = mongoose.Schema({
            name: String,
            surname: String
        });
        models["Identity"] = mongoose.model('Identity', IdentitySchema);
    }
    return models.Identity;
}

var getProvaModel = function(ExtMongoose) {
    if(models.Prova == undefined){
        var ProvaSchema = mongoose.Schema({
            name: String,
        });
        models["Prova"] = mongoose.model('Prova', ProvaSchema);
    }
    return models.Prova;
}

var getUserCredentialModel = function(ExtMongoose) {
   /* if(models.UserCredential == undefined){
        var schema = mongoose.Schema({
            user_id: String,
            user_psw: String,
            user_role : String
        });
        models["UserCredential"] = mongoose.model('UserCredential', schema);
    }
    return models.UserCredential;*/
      if(models.UserCredential == undefined){
        var schema = ExtMongoose.Schema({
            user_id: String,
            user_psw: String,
            user_role : String
        });
        models["UserCredential"] = ExtMongoose.model('UserCredential', schema);
    }
    return models.UserCredential;
}

var getModel = function(name, ExtMongoose) {
    if(name != undefined){
        if(name == "Identity"){
            return getIdentityModel(ExtMongoose);
        }   
        else if(name == "Prova"){
            return getProvaModel(ExtMongoose);
        }
        else if(name == "UserCredential"){
            return getUserCredentialModel(ExtMongoose);
        }
   }
   else
       return undefined;
}

module.exports = {
    getModel : getModel
}