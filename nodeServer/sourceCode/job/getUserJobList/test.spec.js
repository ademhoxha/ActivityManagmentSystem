// load db schema
var models = require('../../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var flow = require('./getUserJobListFlow');

var data = {
    email: "adem.hoxha@hotmail.it",
}

flow.TestFlow(data, (err, ret) => {
    if (err) {
        console.log("Test Error")
        console.log(err);
    }
    else {
        console.log("Test Success")
    }
})