var publicDBApi = require('../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

var secretUser = publicDBApi.getSecretUserEntity();

email1 = "adem.hoxha@secret.com";
password1 = "secretPassword";
name1 = "Adem";
surname1 = "Hoxha";
company1 = "Company";
mobilephone1 = "3287314829";

var query = {
    email : email1,
    password : password1,
    name : name1,
    surname : surname1,
    company : company1,
    mobilephone : mobilephone1
}

var data = {}
data.query = query

//insert();
remove();
//find()

function insert(){
    secretUser.insert(data, function(err,ret) {
        if(err)
            console.log("ERROR IN INSERT "+err);
        else 
            console.log("ADDED"+ret);
    } )

}

function remove(){
    var remData = {query : {email : email1}}
    secretUser.remove(remData, function(err,ret) {
        if(err)
            console.log("ERROR IN REMOVE "+err);
        else 
            console.log("REMOVED"+ret);
    } )
}

function find(){
    var remData = {query : {email : email1}}
    secretUser.find(remData, function(err,ret) {
        if(err)
            console.log("ERROR IN FIND "+err);
        else 
            console.log("FIND"+ret);
    } )
}