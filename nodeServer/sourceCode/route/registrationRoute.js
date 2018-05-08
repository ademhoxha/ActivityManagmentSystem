var app = require('../server/serverApp').app;
var baseRoute = require('./baseRoute').baseRoute;
var dbAPI = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

class registrationRoute extends baseRoute {

    applyRoute() {

        app.all("/api/registration", function (req, res, next) {

            if (req.body.email && req.body.password && req.body.mobilephone) {
                var data = {
                    query: {
                        email: req.body.email,
                        password: req.body.password,
                        mobilephone: req.body.mobilephone,
                        company: req.body.company,
                        name: req.body.name,
                        surname: req.body.surname
                    }
                };
                registrationFlow(data, (err, ret) => {
                    if (err) {
                        console.log("REGISTRATION FAILED => " + err);
                        res.send("REGISTRATION FAILED");
                    }
                    else {
                        console.log("*** REGISTRATION SUCCESS ***");
                        res.send("OTP SUCCESS");
                    }
                });

            }
            else {
                res.send("REGISTRATION FAILED => MISSED ESSENTIAL INFORMATION");
            }
        });

    }

}

var user = dbAPI.getUserEntity();

function registrationFlow(data, callback) {
    var findData = {
        query: {
            email: data.query.email
        }
    }
    user.find(findData, (err, ret) => {
        if (err)
            return callback(err);
        if (ret && ret[0])
            return callback("Exisisting user with the same email");
        return registerUser(data, callback);
    })
}

function registerUser(data, callback) {
    user.insert(data, (err, ret) => {
        if (err)
            return callback(err);
        return callback(undefined, ret);
    })
}

module.exports = {
    registrationRoute: registrationRoute
}