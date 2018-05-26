var abstractSchema = require("./abstractSchema")

var name = "UserCredential"

var addQuery = function(data){
    return {user_id : data.user_id.trim(), user_psw : data.user_psw.trim(), user_role : data.user_role.trim()};
}

var findQuery = function(data){
    return {user_id : data.user_id.trim()};
}

var delQuery = function(data){
    return {user_id : data.user_id.trim()};
}

var validateData = function(data){
    if(data.user_id == undefined || data.user_id == null || data.user_id.trim() == ""){
        return false;
    }
    else{
        return true;
    }
}

var getUserCredentialSchema = function() {
   return new abstractSchema.abstractSchema(name,addQuery,findQuery,delQuery,validateData)
}

module.exports = {
    getUserCredentialSchema : getUserCredentialSchema
}