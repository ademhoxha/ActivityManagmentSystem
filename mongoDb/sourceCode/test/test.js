var api = require('../publicEntity/publicDBApi').publicDBApi;

var user = api.getUserEntity();

email1 = "email";
password1 = "";
name1 = "name";
surname1 = "surname";
company1 = "company";
mobilephone1 = "mobilephone";

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
user.insert(data, function(err) {
    if(err)
        console.log("ERROR"+err);
    else 
        console.log("ADDED");
} )

