var app = require('../server/serverApp').app;
var baseRoute = require('./baseRoute').baseRoute;
var dbAPI = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

class otpRoute extends baseRoute {

    applyRoute() {

        app.all("/api/otp", function (req, res, next) {

            if (req.body.email) {
                var data = { email: req.body.email };
                otpFlow(data, (err, ret) => {
                    if (err){
                        console.log("OTP NOT SUCCESS "+err);
                        res.send("OTP NOT SUCCESS");
                    }
                    else{
                        console.log("OTP SUCCESS ");
                        res.send("OTP SUCCESS");
                    }
                });

            }
            else {
                res.send("NOT EMAIL");
            }
        });

    }

}

var user = dbAPI.getUserEntity();

function otpFlow(userData, callback) {
    var data = {};
    data.query = { email: userData.email };
    findUser(data, callback);
}

function findUser(userData, callback) {
    user.find(userData, (err, ret) => {
        if (err)
            return callback(err);
        if(!ret || !ret[0] )
            return callback("User Not Found");
        return sendEmail(ret[0], callback);
    })
}

function sendEmail(userData, callback) {
    var data = {};
    data.query = {email : userData.email} // must do this because the user can be founded by mobile phone number
    var sendOTPEmail = require('../../../otpProvider/otpPublicApi/otpPublicApi').sendOTPEmail;
    sendOTPEmail(data, (err, ret) => {
        if (err)
            return callback(err);
        data.codeNumber = ret.codeNumber;
        return updateUser(data, callback);
    });
}

function updateUser(userData, callback) {
    var data = {};
    data.update = {
        otp: {
            code: userData.codeNumber,
            date: Date.now()
        }
    };
    data.query = {
        email: userData.query.email
    }
    user.update(data, (err, ret) => {
        if (err)
            return callback(err);
        return callback(undefined, ret);

    })
}

module.exports = {
    otpRoute: otpRoute
}