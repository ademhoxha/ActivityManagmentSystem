var BaseController = require('../../controllerUtils/baseController').BaseController;
var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var configuration = require('../../config/serverConfigUtils');

class NewProjectController extends BaseController {
    applyController(req, res, next) {
        console.log("NEW PROJECT CONTROLLER")
        var none = new NextStep();
        var request = new NewProjectRequest(none);
        request.apply(req, res, next);
    }
}

var istance = new NewProjectController();

module.exports = {
    NewProjectController: istance
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

class NewProjectRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/new") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                projectName: req.body.projectName,
                projectFounder: req.session.email,
                startDate: req.body.startDate,
                deliveryDate: req.body.deliveryDate,
                selledDays: req.body.selledDays,
                estimatedDays: req.body.estimatedDays,
                selledCostForDay: req.body.selledCostForDay,
                estimatedCostForDay: req.body.estimatedCostForDay
            };
            newProjectFlow(data, (err, ret) => {
                if (err) {
                    console.log("Poject Insert Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Project Insert Success")
                    var succ = returnCodeFactory.successRet("Project Insert Success");
                    return res.status(succ.code).json({ message: succ.message });
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

var project = EntitiesFactory.getProjectEntity();
var user = EntitiesFactory.getUserEntity();

function newProjectFlow(userData, callback) {
    var data = {};
    data.query = {
        projectName: userData.projectName,
        projectFounder: userData.projectFounder,
        startDate: userData.startDate,
        deliveryDate: userData.deliveryDate,
        selledDays: userData.selledDays,
        estimatedDays: userData.estimatedDays,
        selledCostForDay: userData.selledCostForDay,
        estimatedCostForDay: userData.estimatedCostForDay
    };
    // validation Data TODO
    findUser(data, callback);
}

function findUser(data, callback) {
    var dataFind = {}
    console.log("email " + data.query.projectFounder)
    dataFind.query = {
        email: data.query.projectFounder
    }
    user.find(dataFind, (err, ret) => {
        if (err) {
            console.log("New project error in find user" + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (!ret || !ret[0]) {
            console.log("New Project User Not Found")
            return callback(returnCodeFactory.dataError("Founder User not Found"));
        }
        var nextData = data;
        nextData.projectFounderOBJ = ret[0].toObject();

        // delete some data
        delete nextData.projectFounderOBJ.password;
        delete nextData.projectFounderOBJ.authToken;
        delete nextData.projectFounderOBJ.otp;
        delete nextData.projectFounderOBJ._id;

        console.log("EMAIL "+nextData.projectFounderOBJ.email);
        nextData.query.projectFounder = nextData.projectFounderOBJ.email;
        return findProject(nextData, callback);
    })

}

function findProject(data, callback) {
    var dataFind = {};
    dataFind.query = {
        projectName: data.query.projectName
    }
    project.find(dataFind, (err, ret) => {
        if (err) {
            console.log("NEW PROJECT CONTROLLER" + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && !ret[0]) {
            return insertProject(data, callback);
        }

        console.log("Project Name Used")
        return callback(returnCodeFactory.dataError("Exsisting Project"));

    })
}

function insertProject(data, callback) {
    project.insert(data, (err, ret) => {
        if (err) {
            console.log("NEW PROJECT CONTROLLER => ERROR IN INSERT NEW PROJECT " + err)
            return callback(returnCodeFactory.dbError());
        }
        return updateFounder(data, callback);
    })
}

function updateFounder(data, callback) {
    var dataUpdate = {}
    dataUpdate.query = {
        email: data.projectFounderOBJ.email
    }
    var projectsList = data.projectFounderOBJ.projects;
    if(!projectsList)
        projectsList =[];

    projectsList.push(data.query.projectName); 
    console.log("Project List: "+projectsList);

    dataUpdate.update = {
        projects : projectsList
    }
    user.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("NEW PROJECT CONTROLLER => ERROR USER PROJECT LIST UPDATE" + err)
            return callback(returnCodeFactory.dbError());
        }
        return callback(undefined, ret);
    });
}