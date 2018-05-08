var mailApi = require('../sourceCode/emailImplementation/emailApi').mailApi;

class otpFactory {
    getEmailApi() {
        return mailApi;
    }
}

var istance = new otpFactory();


function sendEmail(data, callback) {
    istance.getEmailApi().sendEmail(data, callback);
}

module.exports = {
    sendEmail: sendEmail
}