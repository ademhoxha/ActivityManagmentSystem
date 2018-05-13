
class Models {

    getSchemaJson(schemaName) {
        // user
        if (schemaName == "User")
            return {
                pKey: String,
                email: String,
                password: String,
                name: String,
                surname: String,
                mobilephone: String,
                company: String,
                otp: {
                    code: String,
                    date: Date
                },
                authToken: String
            };

        // emailOTP
        if (schemaName == "OtpReceiver")
            return {
                receiver: String,
                otp: {
                    code: String,
                    date: Date,
                    time: Number
                }
            };

        // emailOTP
        if (schemaName == "otpManager")
            return {
                date : Date,
                total : Number,
                mailList : [],
                lastTime: Number
            };
    }
}

var istance = new Models();

module.exports = {
    Models: istance
}