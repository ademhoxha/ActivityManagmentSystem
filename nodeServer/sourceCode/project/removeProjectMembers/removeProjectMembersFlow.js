var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class RemoveProjectMembersFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Remove Team Members Flow")
        var none = new NextStepChain();
        var request = new RemoveProjectMembersRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    RemoveProjectMembersFlow: RemoveProjectMembersFlow,
    TestFlow: StartFlow // only for test
}

class RemoveProjectMembersRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/removeteammembers") {
            return super.next(req, res, next);
        }
        else {
            var data = {
                email: req.session.email,
                projectName: req.body.projectName,
                removedlist: req.body.removedlist,
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Remove Project Members Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Remove Project Members Success")
                    var succ = returnCodeFactory.successRet("Remove Project Members Success");
                    return res.status(succ.code).json({ message: succ.message });
                }
            });

        }
    }
}

var project = EntitiesFactory.getProjectEntity();
var user = EntitiesFactory.getUserEntity();

function StartFlow(userData, callback) {
    var data = {};
    data.query = {
        email: userData.email,
        projectName: userData.projectName,
        removedlist: userData.removedlist,
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
            console.log("Remove Team Members => findProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projectTeam"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);
            console.log(retList)
            // data.query.projectTeam = data.query.newProjectMembers;

            if (retList && retList[0].projectTeam && retList[0].projectTeam.length > 0) {
                data.query.projectTeam = retList[0].projectTeam;
            }

            data.query.removedlist.forEach(element => {
                var i = data.query.projectTeam.indexOf(element);
                if (i != -1) {
                    data.query.projectTeam.splice(i, 1);
                }
            });

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
            console.log("Remove Team Members => editProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }

        return updateUsersFlow(data, callback, data.query.removedlist.length - 1);
    })
}

function updateUsersFlow(data, callback, index) {

    if (index >= 0) {
        var execData = {
            query: {
                email: data.query.removedlist[index],
                projectName: data.query.projectName
            }
        }
        return findUserProjectList(execData, (err, ret) => {
            if (err) {
                console.log("Remove Team Members => updateUsersFlow(data, callback) " + err)
                console.log("Current Index (from length-1 to 0): " + index);
                console.log("Members: ");
                console.log(data.query.removedlist);
                return callback(returnCodeFactory.dbError());
            }
            else {
                updateUsersFlow(data, callback, index - 1);
            }
        });
    }
    console.log("Remove Team Members All Users Updated")
    return callback(undefined, true);

}


function findUserProjectList(data, callback) {
    var execData = { query: {} }
    execData.query = { email: data.query.email }
    user.find(execData, (err, ret) => {
        if (err) {
            console.log("Remove Team Members => findUserProjectList(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {

            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projects"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            var nextData = { query: {}, update: {} };
            nextData.query = { email: data.query.email }
            nextData.update = { projects: [] }

            if (retList && retList[0].projects && retList[0].projects.length > 0) {
                nextData.update.projects = retList[0].projects;
            }

            var i = nextData.update.projects.indexOf(data.query.projectName);
            if (i != -1) {
                nextData.update.projects.splice(i, 1);
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
            console.log("Remove Team Members => updateUserProjectList(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Remove Team Members User Updated " + data.query.email + "/// Projects :")
        console.log(data.update.projects)
        return callback(undefined, true);
    });

}