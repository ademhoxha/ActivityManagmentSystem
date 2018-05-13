var BaseController = require('./baseController').BaseController;
var dbAPI = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi;

class RegistrationController extends BaseController {
    applyController(req, res, next) {
        console.log("REGISTRATION CONTROLLER")
        var none = new NextStep();
        var registration = new RegistrationStep(none);
        registration.apply(req, res, next);
    }
}

var istance = new RegistrationController();

module.exports = {
    RegistrationController: istance
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

class RegistrationStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/registration") {
            return super.next(req, res, next);
        }
        else {
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
                        res.status(201).json({ msg: "REGISTRATION FAILED" });
                    }
                    else {
                        res.status(200).json({ msg: "REGISTRATION SUCCESS" });
                    }
                });

            }
            else {
                res.status(201).json({ msg: "REGISTRATION FAILED => MISSED ESSENTIAL INFORMATION" });
            }
        }
    }
}

class NextStep extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        next();
    }
}

/****************** Flow ******************/

var user = dbAPI.getSecretUserEntity();

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
