var verifyOTPEmail = require('../otpPublicApi/otpPublicApi').verifyOTPEmail;

var data = {}
data.receiver = "adem.hoxha@hotmail.it"
data.code = "355738";

verifyOTPEmail(data, (err, info) =>{
    if(err)
        console.log("ERROR => "+err);
    else 
        console.log("OTP VERIFIED => "+info);
} )