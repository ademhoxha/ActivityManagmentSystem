var IClientSession = require("./IClientSession").IClientSession;
var publicDBApi = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

class standardClientSession extends IClientSession {

    applySession(min, extraMin) {
        if (min && extraMin)
            super.applySession(min, extraMin);
        else if (min)
            super.applySession(min);
        else
            super.applySession();
    }

    login(req, callback) {
        var user = publicDBApi.getSecretUserEntity();
        var data = {
            query: {
                email: req.body.email,
                password: req.body.password,
                /*otp: {
                    code: req.body.otpCode
                }*/

            }
        }
        user.find(data, (err, ret) => {
            if (err){
                console.log("LOGIN FIND USER ERROR");
                return callback(err);
            }
            if (!ret || !ret[0] || !ret[0].otp || ret[0].otp.code != req.body.otpCode){
                console.log("LOGIN USER NOT FOUND ");
                return callback("User Not Found"+ret);
            }

            var token = generateToken();
            data.update = { authToken: token }

            var updateData = {
                query : {
                    email : req.body.email
                }
            }
            updateData.update = {
                authToken: token
            }

            return user.update(updateData, (err, ret) => {
                if (err){
                    console.log("LOGIN UPDATE ERROR ");
                    return callback(err);
                }
                req.session.email = data.query.email;
                req.session.ip = "localhost"; // TODO
                req.session.token = token;
                return callback(undefined, true)
            })
        })
    }

    logout(req, callback) {
        var user = publicDBApi.getSecretUserEntity();
        var data = {
            query: {
                email: req.body.email,
                password: req.body.password
            }
        }
        user.find(data, (err, ret) => {
            if (err)
                return callback(err);
            if (!ret || !ret[0])
                return callback("User Not Found");
            data.update = { authToken: "" }
            return user.update(data, (err, ret) => {
                if (err)
                    return callback(err);
                delete req.session.email;
                delete req.session.ip;
                delete req.session.token;
                return callback(undefined, true)
            })
        })
    }

    isLogged(req, callback) {
        console.log("LOGIN SEE IF LOGGED  SESSION:" + JSON.stringify(req.session));
        if (req.session.email && req.session.ip && req.session.token) {
            var user = publicDBApi.getSecretUserEntity();
            var data = {
                query: {
                    email: req.session.email,
                    authToken: req.session.token
                }
            }
            user.find(data, (err, ret) => {

                /*console.log("******** SESSION TOKEN ********* ")
                console.log(req.session.token)
                console.log("******** USER TOKEN ********* ")
                console.log(ret[0].authToken)*/

                if (err){
                    console.log("IS LOGGED? ERROR IN FIND ");
                    return callback(err);
                }
                if (ret && ret[0]){
                    console.log("LOGIN LOGGED USER FOUND ");
                    return callback(undefined, true)
                }
                console.log("LOGIN LOGGED USER NOT FOUND "+ret+ "*****"+ret[0]);
                return callback("User Not Logged");

            })
        }
        else{
            console.log("LOGIN LOGGED CAN'T FIND SESSION ");
            return callback(undefined, false)
        }
    }

    canLogin(req) {
        console.log("LOGIN SEE IF CAN LOGIN"+JSON.stringify(req.body));
        if(req.body.email && req.body.password && req.body.otpCode)
            return true;
        return false;
    }

}

var istance = new standardClientSession();

module.exports = {
    standardClientSession: istance
}

function generateToken() {
    return require('crypto').randomBytes(8).toString('hex');
}