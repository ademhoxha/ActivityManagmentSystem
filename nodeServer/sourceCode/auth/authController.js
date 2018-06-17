var BaseController = require('../controllerUtils/baseController').BaseController;
var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;
var returnCodeFactory = require('../error/returnCodeFactory').ReturnCodeFactory;
var EntitiesFactory = require('../entitiesUtils/entitiesFactory').EntitiesFactory;

class AuthController extends BaseController {
    applyController(req, res, next) {
        console.log("LOGIN CONTROLLER")
        var none = new NextStep();
        var logout = new LogoutStep(none);
        var login = new LoginStep(logout);
        login.apply(req, res, next);
    }
}

var istance = new AuthController();

module.exports = {
    AuthController: istance
}

/****************** Responsability Chain ******************/

class BaseControllerChain {

    constructor(nextStep) {
        this.next = nextStep;
    }
    apply(req, res, next) { }

    next(req, res, next) {
        return this.next.apply(req, res, next);
    }
}

class LoginStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/login") {
            return super.next(req, res, next);
        }
        else {
            console.log("LOGIN START");
            if (standardClientSession.canLogin(req)) {
                console.log("LOGIN CAN LOGIN");
               return loginFlow(req, (err, ret) => {
                    if (ret) {
                        console.log("LOGIN SUCCESS");
                        
                        var succ = returnCodeFactory.successRet("Login Success");
                        return res.status(succ.code).json({ message: succ.message });
                    }
                    console.log("LOGIN FAIL");
                    return res.status(err.code).json({ message: err.message });
                });
            }
            /*else {
                console.log("LOGIN CAN'T LOGIN");
                return next(); // go to index.html
            }*/
            standardClientSession.isLogged(req, (err, ret) => {
                if(ret){
                    console.log("USER LOGGED GOING TO DASHBOARD");
                    return res.redirect("/dashboard");
                }
                console.log("LOGIN CAN'T LOGIN");
                return next(); // go to index.html
            })
        }
    }
}

class LogoutStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/logout") {
            return super.next(req, res, next);
        }
        else {
            standardClientSession.isLogged(req, (err, ret) => {
                if (ret) {
                    return logoutFlow(req, (err, ret) => {
                        if (ret) {
                            var succ = returnCodeFactory.successRet("Logout Success");
                            //return res.status(succ.code).json({ message: succ.message });
                            return res.redirect('/login'); // it is a post request not an api...
                        }
                        return res.status(err.code).json({ message: err.message });
                    })
                }
                return res.status(err.code).json({ message: err.message});
            })
        }
    }
}

class NextStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        return standardClientSession.isLogged(req, (err, ret) => {
            if (ret) {
                console.log("LOGIN IS LOGGED");
                return next();
            }

            console.log("LOGIN IS NOT LOGGED");
            if (req.path.includes("api/")) {
                console.log(req.path)
                console.log("API UNAUTHORIZED");
                var unauth = returnCodeFactory.unauthorizedError("UnauthorizedError");
                return res.status(unauth.code).json({ message: unauth.message });
            }

            res.redirect('/login');
        });
    }
}


/****************** Flow ******************/

function loginFlow(req, callback) {
    var user = EntitiesFactory.getUserEntity();
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
        if (err) {
            console.log("LOGIN FIND USER ERROR");
            return callback(returnCodeFactory.dbError());
        }
        if (!ret || !ret[0]) {
            console.log("LOGIN USER NOT FOUND ");
            return callback(returnCodeFactory.dataError('User Not Valid'));
        }

        var token = standardClientSession.generateToken();
        data.update = { authToken: token }

        var updateData = {
            query: {
                email: req.body.email
            }
        }
        updateData.update = {
            authToken: token
        }

        return user.update(updateData, (err, ret) => {
            if (err) {
                console.log("LOGIN UPDATE ERROR ");
                return callback(returnCodeFactory.dbError());
            }
            req.session.email = data.query.email;
            req.session.ip = "localhost"; // TODO
            req.session.token = token;
            return callback(undefined, true)
        })
    })
}

function logoutFlow(req, callback) {
    var user = EntitiesFactory.getUserEntity();
    var data = {
        query: {
            email: req.session.email,
            //password: req.body.password
        }
    }
    user.find(data, (err, ret) => {
        if (err)
            return callback(returnCodeFactory.dbError());
        if (!ret || !ret[0])
            return callback(returnCodeFactory.dataError('User Not Valid'));
        data.update = { authToken: "" }
        return user.update(data, (err, ret) => {
            if (err)
                return callback(returnCodeFactory.dbError());
            delete req.session.email;
            delete req.session.ip;
            delete req.session.token;
            return callback(undefined, true)
        })
    })
}