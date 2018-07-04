var BaseEntityPrototype = require('../sourceCode/entities/baseEntityPrototype').BaseEntityPrototype;
var SecretEntityPrototype = require('../sourceCode/entities/secretEntityPrototype').SecretEntityPrototype;
var models = require('../sourceCode/models/models').Models;


class publicDBApi {
    
    getBaseEntityPrototype(){
       return BaseEntityPrototype;
    }
    getSecretEntityPrototype(){
        return SecretEntityPrototype;
    }
    setModel(schema) {
        models.setModel(schema);
    }
}

var istance = new publicDBApi();

module.exports = {
    publicDBApi : istance
}
