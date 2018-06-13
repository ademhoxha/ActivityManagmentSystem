var BaseController = require('../../controllerUtils/baseController').BaseController;
var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var configuration = require('../../config/serverConfigUtils');

class ProjectListController extends BaseController {
    applyController(req, res, next) {
        console.log("PROJECT LIST CONTROLLER")
        var none = new NextStep();
        var request = new ProjectListRequest(none);
        request.apply(req, res, next);
    }
}

var istance = new ProjectListController();

module.exports = {
    ProjectListController: istance
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

class ProjectListRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/list") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                email: req.session.email,
            };
            projectListFlow(data, (err, ret) => {
                if (err) {
                    console.log("Poject List Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Project List Success")
                    var succ = returnCodeFactory.successRet("Project List Success");
                    return res.status(succ.code).json({ message: succ.message, projectList: ret }); // project list
                }
            });

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

var user = EntitiesFactory.getUserEntity();

function projectListFlow(data, callback) {
    // validation Data TODO
    findUser(data, callback);
}

function findUser(data, callback) {
    var dataFind = {}
    console.log("email " + data.email)
    dataFind.query = {
        email: data.email
    }
    user.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Project List error in find user" + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (!ret || !ret[0]) {
            console.log("Project List User Not Found")
            return callback(returnCodeFactory.dataError("Project List User Not Found"));
        }
        var nextData = {};
        nextData = ret[0].toObject();

        return mapResponse(nextData.projects, callback)
    })

}

function mapResponse(data, callback) {
    var ret = [];
    data.forEach(element => {
        ret.push({ label: element, value: element })
    });
    return callback(undefined, ret);
}