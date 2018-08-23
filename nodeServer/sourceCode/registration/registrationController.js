var BaseController = require('../controllerUtils/baseController').BaseController;
var EntitiesFactory = require('../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../error/returnCodeFactory').ReturnCodeFactory;

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
                        res.status(err.code).json({ message: err.message });
                    }
                    else {
                        var succ = returnCodeFactory.successRet("Registration Success");
                        return res.status(succ.code).json({ message: succ.message });
                    }
                });

            }
            else {
                var err = returnCodeFactory.dataError('User Not Valid');
                res.status(err.code).json({ message: err.message });
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

var user = EntitiesFactory.getUserEntity();
var userList = EntitiesFactory.getUserList();

function registrationFlow(data, callback) {
    var findData = {
        query: {
            email: data.query.email
        }
    }
    user.find(findData, (err, ret) => {
        if (err) {
            console.log("registrationFlow()")
            return callback(returnCodeFactory.dbError());
        }
        if (ret && ret[0]) {
            console.log("Exisisting user with the same email");
            return callback(returnCodeFactory.dataError("Exisisting user with the same email"));
        }
        return registerUser(data, callback);
    })
}

function registerUser(data, callback) {
    user.insert(data, (err, ret) => {
        if (err) {
            console.log("registerUser()")
            return callback(returnCodeFactory.dbError());
        }
        return updateUserList(data, callback);
    })
}

function updateUserList(data, callback) {
    var inserData = {
        query: {
            email: data.query.email,
            mobilephone: data.query.mobilephone
        }
    }
    userList.insert(inserData, (err, ret) => {
        if (err) {
            console.log("updateUserList()")
            return callback(returnCodeFactory.dbError());
        }
        return callback(undefined, ret);
    })
}
