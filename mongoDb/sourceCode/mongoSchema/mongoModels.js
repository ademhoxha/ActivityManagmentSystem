'use strict';

function MongoModels() {
    this.mongoose = undefined;
    this.models = {};
}

MongoModels.prototype.getIdentityModel = function() {
    if(this.models.Identity == undefined){
        var IdentitySchema = this.mongoose.Schema({
            name: String,
            surname: String
        });
        this.models["Identity"] = this.mongoose.model('Identity', IdentitySchema);
    }
    return this.models.Identity;
}

MongoModels.prototype.getProvaModel = function() {
    if(this.models.Prova == undefined){
        var ProvaSchema = this.mongoose.Schema({
            name: String,
        });
        this.models["Prova"] = this.mongoose.model('Prova', ProvaSchema);
    }
    return this.models.Prova;
}

MongoModels.prototype.getUserCredentialModel = function() {
    if(this.models.UserCredential == undefined){
        var schema = this.mongoose.Schema({
            user_id: String,
            user_psw: String,
            user_role : String
        });
        this.models["UserCredential"] = this.mongoose.model('UserCredential', schema);
    }
    return this.models.UserCredential;
}

MongoModels.prototype.getModel = function(name, moongose) {
    
    if(this.mongoose == undefined){
        this.mongoose = moongose;
    }

    if(name != undefined){
        if(name == "Identity"){
            return this.getIdentityModel();
        }   
        else if(name == "Prova"){
            return this.getProvaModel();
        }
        else if(name == "UserCredential"){
            return this.getUserCredentialModel();
        }
   }
   else
       return undefined;
}

module.exports = {
    MongoModels : MongoModels
}