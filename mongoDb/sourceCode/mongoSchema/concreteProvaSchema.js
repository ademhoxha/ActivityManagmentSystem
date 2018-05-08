var abstractSchema = require("./abstractSchema")

var name = "Prova"

var addQuery = function(data){
    return {name : data.name.trim()};
}

var findQuery = function(data){
    return {name : data.name.trim()};
}

var delQuery = function(data){
    return {name : data.name.trim()};
}

var validateData = function(data){
    if(data.name == undefined || data.name == null || data.name.trim() == ""){
        return false;
    }
    else{
        return true;
    }
}

var getProvaSchema = function() {
   return new abstractSchema.abstractSchema(name,addQuery,findQuery,delQuery,validateData)
}

module.exports = {
    getProvaSchema : getProvaSchema
}