var BaseController = require('../controllerUtils/baseController').BaseController;
var dbAPI = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;
var returnCodeFactory = require('../error/returnCodeFactory').ReturnCodeFactory;
var configuration = require('../config/serverConfigUtils');

class OTPController extends BaseController {
    applyController(req, res, next) {
        console.log("OTP CONTROLLER")
        var none = new NextStep();
        var request = new OTPRequest(none);
        var validation = new OTPValidation(request);
        validation.apply(req, res, next);
    }
}

var istance = new OTPController();

module.exports = {
    OTPController: istance
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

class OTPRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/otp/request") {
            return super.next(req, res, next);
        }
        else {

            // see if otp is enabled
            var confData = configuration.getConfiguration();
            if(!confData || !confData.otp || confData.otp != "Y"){
                console.log("OTP DISABLED")
                var succ = returnCodeFactory.notRequiredRet("OTP DISABLED");
                return res.status(succ.code).json({ message: succ.message });
            }

            console.log("OTP ACTIVE")
            var succ = returnCodeFactory.successRet("OTP SUCCESS");
            return res.status(succ.code).json({ message: succ.message });

            if (req.body.email) {
                var data = {
                    email: req.body.email,
                    password: req.body.password,
                };
                otpRequestFlow(data, (err, ret) => {
                    if (err) {
                        console.log("OTP NOT SUCCESS")
                        return res.status(err.code).json({ message: err.message });
                    }
                    else {
                        console.log("OTP SUCCESS")
                        var succ = returnCodeFactory.successRet("OTP SUCCESS");
                        return res.status(succ.code).json({ message: succ.message });
                    }
                });
            }
            else {
                console.log("NOT EMAIL")
                var err = returnCodeFactory.dataError("Email Address is missed");
                return res.status(err.code).json({ message: err.message });
            }
        }
    }
}

class OTPValidation extends BaseControllerChain {
    // TODO
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/otp/validation") {
            return super.next(req, res, next);
        }
        else {
            // TODO
        }
    }
}

class NextStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        return next();
    }
}

/****************** Flow ******************/

var user = dbAPI.getSecretUserEntity();

function otpRequestFlow(userData, callback) {
    var data = {};
    data.query = {
        email: userData.email,
        password: userData.password
    };
    findUser(data, callback);
}

function findUser(userData, callback) {
    user.find(userData, (err, ret) => {
        if (err) {
            console.log("OTP CONTROLLER => ERROR IN FIND" + err)
            return callback(returnCodeFactory.dbError());
        }
        if (!ret || !ret[0]) {
            console.log("OTP CONTROLLER => USER NOT FOUND")
            return callback(returnCodeFactory.dataError('User Not Valid'));
        }

         return sendEmail(ret[0], callback);;
    })
}

function sendEmail(userData, callback) {
    var data = {};
    data.query = { email: userData.email } // must do this because the user can be founded by mobile phone number
    var sendOTPEmail = require('../../../otpProvider/otpPublicApi/otpPublicApi').sendOTPEmail;
    sendOTPEmail(data, (err, ret) => {
        if (err) {
            console.log("OTP CONTROLLER => ERROR IN SEND EMAIL " + err)
            return callback(returnCodeFactory.emailError());
        }
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
        if (err) {
            console.log("OTP CONTROLLER => ERROR IN UPDATE USER " + err)
            return callback(returnCodeFactory.dbError());
        }
        return callback(undefined, ret);

    })
}