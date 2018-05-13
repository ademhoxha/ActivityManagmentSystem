var BaseController = require('./baseController').BaseController;
var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;
var returnCodeFactory = require('../error/returnCodeFactory').ReturnCodeFactory;

class LoginController extends BaseController {
    applyController(req, res, next) {
        console.log("LOGIN CONTROLLER")
        var none = new NextStep();
        var logout = new LogoutStep(none);
        var login = new LoginStep(logout);
        login.apply(req, res, next);
    }
}

var istance = new LoginController();

module.exports = {
    LoginController: istance
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
                standardClientSession.login(req, (err, ret) => {
                    if (ret){
                        console.log("LOGIN SUCCESS");
                        var succ = returnCodeFactory.successRet("Login Success");
                        return res.status(succ.code).json({ message: succ.message });
                    }
                    console.log("LOGIN FAIL");
                    return res.status(err.code).json({ message: err.message });
                })
            }
            else{
                console.log("LOGIN CAN'T LOGIN");
                return next(); // go to index.html
            }
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
                    standardClientSession.logout(req, (err, ret) => {
                        if (ret){
                            var succ = returnCodeFactory.successRet("Logout Success");
                            return res.status(succ.code).json({ message: succ.message });
                        }
                        return res.status(err.code).json({ message: err.message });;

                    })
                }
                //return res.status(err.code).json({ message: err.message});
                res.redirect('/login');
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
            if (ret){
                console.log("LOGIN IS LOGGED");
                return next();
            }
            /*console.log("LOGIN IS NOT LOGGED");
            return res.status(201).json({ msg: "NOT LOGGED" });*/
            res.redirect('/login');
        });
    }
}