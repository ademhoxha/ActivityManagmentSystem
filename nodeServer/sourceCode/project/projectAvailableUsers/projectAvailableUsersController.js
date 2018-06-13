var BaseController = require('../../controllerUtils/baseController').BaseController;
var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var configuration = require('../../config/serverConfigUtils');

var mongoOperations = require('../../entitiesUtils/mongoOperations');


class ProjectAvailableUsersController extends BaseController {
    applyController(req, res, next) {
        console.log("NEW PROJECT AVAILABLE USERS CONTROLLER")
        var none = new NextStep();
        var request = new AvailableUsers(none);
        request.apply(req, res, next);
    }
}

var istance = new ProjectAvailableUsersController();

module.exports = {
    ProjectAvailableUsersController: istance
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

class AvailableUsers extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {

        if (req.path.toLowerCase() != "/api/project/userlist") {
            return super.next(req, res, next);
        }
        else if (req.body.projectName) {
            var data = {
                projectName: req.body.projectName,
            };
            projectAvailableUsersFlow(data, (err, ret) => {
                if (err) {
                    console.log("Poject Available Users Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Project Available Users Success")
                    var succ = returnCodeFactory.successRet("Project Available Users Success");
                    /*console.log("AVAILABLE")
                    console.log(ret.availableUserList)
                    console.log("NOT AVAILABLE")
                    console.log(ret.userList)*/
                    return res.status(succ.code).json({
                        message: succ.message,
                        userList: ret.userList, availableUserList: ret.availableUserList
                    });
                }
            });

        }
        else {
            console.log("Project Available Users No Project Name")
            var err = returnCodeFactory.dataError("Project Name Missing");
            return res.status(err.code).json({ message: err.message })
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
var userList = EntitiesFactory.getUserList();

function projectAvailableUsersFlow(userData, callback) {
    var data = {};
    data.query = {
        projectName: userData.projectName,
    };
    // validation Data TODO
    findProject(data, callback);
}

function findProject(data, callback) {
    var dataFind = {}
    dataFind.query = {
        projectName: data.query.projectName
    }

    project.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Project Available Users error in find project" + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (!ret || !ret[0]) {
            console.log("Project Available Users Project Not Found")
            return callback(returnCodeFactory.dataError("Project Not Found"));
        }


        /*var retData = ret[0].toObject();
        var nextData = data;
        nextData.query.projectList = retData.projectFounder;
        if(retData.projectTeam && retData.projectTeam.length > 0)
            nextData.query.projectList.concat(retData.projectTeam);*/


        var elabData = {};
        elabData.mongoObj = ret;
        elabData.properties = ["projectFounder", "projectTeam"];
        var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);
        /*console.log("FOUNDER AND TEAM")
        console.log(retList);*/
        var nextData = data;
        nextData.query.userList = [];
        if (retList[0].projectFounder)
            nextData.query.userList.push(retList[0].projectFounder);

        if (retList[0].projectTeam && retList[0].projectTeam.length > 0)
            nextData.query.userList = nextData.query.userList.concat(retList[0].projectTeam);

        return findUserList(nextData, callback);
    })

}

function findUserList(data, callback) {
    var dataFind = {}; // find all
    userList.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Project Available Users Find Users" + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret) {
            // iterate and add list

            var elabData = {};
            elabData.mongoObj = ret;
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            var nextData = data;
            nextData.query.availableUserList = [];
            /*console.log("USER LIST")
            console.log(nextData.query.userList)*/
            retList.forEach(element => {
                //console.log("element: " + element.email + " /// query: " + nextData.query.userList.includes(element.email))
                if (!nextData.query.userList.includes(element.email))
                    nextData.query.availableUserList.push(element.email);
            })
            return mapResult(nextData, callback);
        }

        console.log("Project Available Users UserList not found")
        return callback(returnCodeFactory.dataError("UserList not found"));

    })
}

function mapResult(data, callback) {
    var ret = { userList: [], availableUserList: [] };
    data.query.userList.forEach(element => {
        ret.userList.push({ label: element, value: element })
    });
    data.query.availableUserList.forEach(element => {
        ret.availableUserList.push({ label: element, value: element })
    });
    return callback(undefined, ret);
}