
// mongoose proxy 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


// schema
const User = mongoose.model('User', {
    email: String,
    password: String,
    name: String,
    surname: String,
    mobilephone: String,
    company: String
});


// crud
const testUser = new User({
    email : "email1",
    password : "password1",
    name : "name1",
    surname : "surname1",
    company : "company1",
    mobilephone : "mobilephone1"
});
testUser.save((error, data) => console.log('meow'))