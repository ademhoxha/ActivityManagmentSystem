var IOtpApi = require('./IOtpApi').IOtpApi
var emailPublicApi = require('../../../emailProvider/emailPublicApi/emailPublicApi');

class mailOtpApi extends IOtpApi {

    configOtp(data) { }

    sendOtp(data, callback) {
        var codeNumber = super.generateOTP();
        var emailData = {};
        emailData.text = "Your OTP code for verification is: " + codeNumber;
        emailData.object = "Otp Verification";
        emailData.receiver = data.query.email;
        emailData.html = '';
        emailData.codeNumber = codeNumber;
        return super.sendOtp(emailData, (err, info) => {
            if (err)
                return callback(err);
            return emailPublicApi.sendEmail(emailData, callback);
        })

    }

    verifyOtp(data, callback) {
        super.verifyOtp(data, callback);
    }
}

var istance = new mailOtpApi();

module.exports = {
    mailOtpApi: istance
}