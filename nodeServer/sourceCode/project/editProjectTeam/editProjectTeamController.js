var BaseController = require('../../controllerUtils/baseController').BaseController;
var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;

var mongoOperations = require('../../entitiesUtils/mongoOperations');

class EditProjectTeamController extends BaseController {
    applyController(req, res, next) {
        console.log("PROJECT TEAM EDIT CONTROLLER")
        var none = new NextStep();
        var request = new ProjectEditRequest(none);
        request.apply(req, res, next);
    }
}

var istance = new EditProjectTeamController();

module.exports = {
    EditProjectTeamController: istance
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

class ProjectEditRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/editteam") {
            return super.next(req, res, next);
        }
        else {

            console.log("************EDIT PROJECT TEAM START*************")
            var data = {
                projectName: req.body.projectName,
                newProjectMembers: req.body.newProjectMembers,
            };
            editProjectTeamFlow(data, (err, ret) => {
                if (err) {
                    console.log("Poject Team Edit Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Poject Team Edit Success")
                    var succ = returnCodeFactory.successRet("Poject Team Edit Success");
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

function editProjectTeamFlow(userData, callback) {
    var data = {};
    data.query = {
        projectName: userData.projectName,
        newProjectMembers: userData.newProjectMembers,
    };
    // validation Data TODO
    findProject(data, callback);
}

function findProject(data, callback) {
    var dataFind = {};
    dataFind.query = {
        projectName: data.query.projectName
    }
    project.find(dataFind, (err, ret) => {
        if (err) {
            console.log("PROJECT TEAM EDIT CONTROLLER => findProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projectTeam"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.query.projectTeam = data.query.newProjectMembers;

            if (retList && retList[0].projectTeam && retList[0].projectTeam.length > 0) {
                data.query.projectTeam = data.query.projectTeam.concat(retList[0].projectTeam)
            }

            return editProject(data, callback);
        }

        console.log("Project Not Found")
        return callback(returnCodeFactory.dataError("Project Not Found"));

    })
}

function editProject(data, callback) {
    var updateDate = { query: {}, update: {} }
    updateDate.query = {
        projectName: data.query.projectName,
    }
    updateDate.update = {
        projectTeam: data.query.projectTeam,
    }
    project.update(updateDate, (err, ret) => {
        if (err) {
            console.log("PROJECT TEAM EDIT CONTROLLER => editProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }

        return updateUsersFlow(data, callback, data.query.newProjectMembers.length - 1);
    })
}

function updateUsersFlow(data, callback, index) {

    if (index >= 0) {
        var execData = {
            query: {
                email: data.query.newProjectMembers[index],
                projectName: data.query.projectName
            }
        }
        return findUserProjectList(execData, (err, ret) => {
            if (err) {
                console.log("PROJECT TEAM EDIT CONTROLLER => updateUsersFlow(data, callback) " + err)
                console.log("Current Index (from length-1 to 0): " + index);
                console.log("Members: ");
                console.log(data.query.newProjectMembers);
                return callback(returnCodeFactory.dbError());
            }
            else {
                updateUsersFlow(data, callback, index - 1);
            }
        });
    }
    console.log("PROJECT TEAM EDIT CONTROLLER All Users Updated")
    return callback(undefined, true);

}


function findUserProjectList(data, callback) {
    var execData = { query: {} }
    execData.query = { email: data.query.email }
    user.find(execData, (err, ret) => {
        if (err) {
            console.log("PROJECT TEAM EDIT CONTROLLER => findAndUpdate(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {

            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projects"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            var nextData = { query: {}, update: {} };
            nextData.query = { email: data.query.email }
            nextData.update = { projects: [data.query.projectName] }

            if (retList && retList[0].projects && retList[0].projects.length > 0) {
                nextData.update.projects = nextData.update.projects.concat(retList[0].projects)
            }

            return updateUserProjectList(nextData, callback);
        }

        console.log("User Not Found")
        return callback(returnCodeFactory.dataError("User Not Found"));
    });
}

function updateUserProjectList(data, callback) {
    user.update(data, (err, ret) => {
        if (err) {
            console.log("PROJECT TEAM EDIT CONTROLLER => updateUserProjectList(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("PROJECT TEAM EDIT CONTROLLER User Updated "+data.query.email + "/// Projects :")
        console.log(data.update.projects)
        return callback(undefined, true);
    });

}