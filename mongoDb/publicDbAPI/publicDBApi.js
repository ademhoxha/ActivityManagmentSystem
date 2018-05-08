var UserEntity = require('../sourceCode/entities/userEntity').UserEntity;
var OtpReceiverEntity = require('../sourceCode/entities/otpReceiver').OtpReceiver;
var OtpManagerEntity = require('../sourceCode/entities/otpManager').otpManager;
var SecretUserEntity = require('../sourceCode/entities/secretUserEntity').SecretUserEntity;

class publicDBApi {
    
    getUserEntity(){
       return new UserEntity();
    }
    getOtpReceiverEntity(){
        return new OtpReceiverEntity();
    }
    getOtpManagerEntity(){
        return new OtpManagerEntity();
    }
    getSecretUserEntity(){
        return new SecretUserEntity();
     }
}

var istance = new publicDBApi();

module.exports = {
    publicDBApi : istance
}
