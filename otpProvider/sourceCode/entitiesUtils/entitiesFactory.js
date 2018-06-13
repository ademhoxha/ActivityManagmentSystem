var otpManager = require('../entities/otpManager').otpManager;
var OtpReceiver = require('../entities/otpReceiver').OtpReceiver;

class EntitiesFactory {
    
    getOtpManager(){
       return new otpManager();
    }
    getOtpReceiver(){
        return new OtpReceiver();
    }
}

var istance = new EntitiesFactory();

module.exports = {
    EntitiesFactory : istance
}