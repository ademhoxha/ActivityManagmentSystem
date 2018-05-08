var mailOtpApi = require('../sourceCode/otpImplementation/mailOtpApi').mailOtpApi;

class otpFactory {
    getOtpEmail() {
        return mailOtpApi;
    }
}

var istance = new otpFactory();


function sendOTPEmail(data, callback) {
    istance.getOtpEmail().sendOtp(data, callback);
}

function verifyOTPEmail(data, callback) {
    istance.getOtpEmail().verifyOtp(data, callback);
}
module.exports = {
    sendOTPEmail: sendOTPEmail,
    verifyOTPEmail : verifyOTPEmail
}