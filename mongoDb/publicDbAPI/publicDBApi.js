var BaseEntityPrototype = require('../sourceCode/entities/baseEntityPrototype').BaseEntityPrototype;
var SecretEntityPrototype = require('../sourceCode/entities/secretEntityPrototype').SecretEntityPrototype;


class publicDBApi {
    
    getBaseEntityPrototype(){
       return BaseEntityPrototype;
    }
    getSecretEntityPrototype(){
        return SecretEntityPrototype;
    }
}

var istance = new publicDBApi();

module.exports = {
    publicDBApi : istance
}
