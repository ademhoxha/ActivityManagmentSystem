var abstractSchema = require("./abstractSchema")

var name = "Identity"

var addQuery = function(data){
    return {name : data.name.trim(), surname : data.surname.trim()};
}

var findQuery = function(data){
    return {name : data.name.trim(), surname : data.surname.trim()};
}

var delQuery = function(data){
    return {name : data.name.trim(), surname : data.surname.trim()};
}

var validateData = function(data){
    if(data.name == undefined || data.name == null || data.name.trim() == "" ||
    data.surname == undefined || data.surname == null || data.surname.trim() == "" ){
        return false;
    }
    else{
        return true;
    }
}

var getIdentitySchema = function() {
   return new abstractSchema.abstractSchema(name,addQuery,findQuery,delQuery,validateData)
}

module.exports = {
    getIdentitySchema : getIdentitySchema
}