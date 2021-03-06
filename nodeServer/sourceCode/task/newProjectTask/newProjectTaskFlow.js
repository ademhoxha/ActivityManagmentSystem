var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class NewProjectTaskFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("New Project Task Flow")
        var none = new NextStepChain();
        var request = new NewTaskRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    NewProjectTaskFlow: NewProjectTaskFlow,
    TestFlow: StartFlow // only for test
}

class NewTaskRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/newprojecttask") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                taskFounder: req.session.email,
                projectName: req.body.projectName,
                taskName: req.body.taskName,
                startDate: req.body.startDate,
                deliveryDate: req.body.deliveryDate,
                selledDays: req.body.selledDays,
                estimatedDays: req.body.estimatedDays,
                selledCostForDay: req.body.selledCostForDay,
                estimatedCostForDay: req.body.estimatedCostForDay,

                extraSelledDays: req.body.extraSelledDays,
                extraEstimatedDays: req.body.extraEstimatedDays
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("New Project Task Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("New Project Task Success")
                    var succ = returnCodeFactory.successRet("New Project Task Success");
                    return res.status(succ.code).json({ message: succ.message });
                }
            });

        }
    }
}


var project = EntitiesFactory.getProjectEntity();
var user = EntitiesFactory.getUserEntity();
var task = EntitiesFactory.getProjectTaskEntity();


function StartFlow(userData, callback) {
    var data = {};
    data.query = {
        taskFounder: userData.taskFounder,
        projectName: userData.projectName,
        taskName: userData.taskName,
        startDate: userData.startDate,
        deliveryDate: userData.deliveryDate,
        selledDays: userData.selledDays,
        estimatedDays: userData.estimatedDays,
        selledCostForDay: userData.selledCostForDay,
        estimatedCostForDay: userData.estimatedCostForDay,
        // extraSelledDays: userData.extraSelledDays,
        // extraEstimatedDays : userData.extraEstimatedDays
    };
    // estra days
    if (userData.extraSelledDays)
        data.query.extraSelledDays = userData.extraSelledDays;
    if (userData.extraEstimatedDays)
        data.query.extraEstimatedDays = userData.extraEstimatedDays;

    // validation Data TODO
    findProject(data, callback);
}

function findProject(data, callback) {
    var dataFind = {
        query: {
            projectName: data.query.projectName
        }
    };
    project.find(dataFind, (err, ret) => {
        if (err) {
            console.log("New Project Task => findProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Project Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projectTasks"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info = {};
            data.info.projectTasks = [{
                taskName: data.query.taskName,

                estimatedDays: data.query.estimatedDays,
                selledDays: data.query.selledDays,

              /*  extraEstimatedDays: data.query.extraEstimatedDays,
                extraSelledDays: data.query.extraSelledDays*/
            }];

            if (data.query.extraSelledDays)
                data.info.projectTasks[0].extraSelledDays = data.query.extraSelledDays;
            if (data.query.extraEstimatedDays)
                data.info.projectTasks[0].extraEstimatedDays = data.query.extraEstimatedDays;

            if (retList && retList[0].projectTasks && retList[0].projectTasks.length > 0) {

                // can be used but is prefered to use the task find query (method findTask)
                /*  retList[0].projectTasks.forEach(element => {
                      if(element.taskName.toLowerCase() == data.query.taskName.toLowerCase()){
                          console.log("This project has a task with the same name")
                          return callback(returnCodeFactory.dataError("Task Name Used"));
                      }
                  });*/

                data.info.projectTasks = data.info.projectTasks.concat(retList[0].projectTasks);
            }

            return findTask(data, callback);
        }

        console.log("Project Not Found")
        return callback(returnCodeFactory.dataError("Project Not Found"));

    });
}

function findTask(data, callback) {
    var dataFind = {
        query: {
            projectName: data.query.projectName,
            taskName: data.query.taskName
        }
    }
    task.find(dataFind, (err, ret) => {
        if (err) {
            console.log("New Project Task => findTask(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("This project has a task with the same name")
            return callback(returnCodeFactory.dataError("Task Name Used"));
        }

        console.log("Task Name Available for this project");
        return newTask(data, callback)
    });
}

function newTask(data, callback) {

    var dataInsert = data;

    task.insert(dataInsert, (err, ret) => {
        if (err) {
            console.log("New Project Task => newTask(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Task Added")
        return editProject(data, callback);
    });
}

function editProject(data, callback) {
    var dataUpdate = { query: {}, update: {} }

    dataUpdate.query.projectName = data.query.projectName;

    dataUpdate.update.projectTasks = data.info.projectTasks;

    project.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("New Project Task => editProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Project Successfuly Modified")
        return findUser(data, callback);
    });
}

function findUser(data, callback) {
    var dataFind = {
        query: {
            email: data.query.taskFounder
        }
    }
    user.find(dataFind, (err, ret) => {
        if (err) {
            console.log("New Project Task => findUser(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("User Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["tasks"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info = {};
            data.info.tasks = [data.query.taskName];
            if (retList && retList[0].tasks && retList[0].tasks.length > 0) {
                data.info.tasks = data.info.tasks.concat(retList[0].tasks)
            }

            return updateUser(data, callback);
        }

        console.log("Project Founder Not Found")
        return callback(returnCodeFactory.dataError("Project Founder Not Found"));
    })
}

function updateUser(data, callback) {
    var dataUpdate = { query: {}, update: {} }
    dataUpdate.query.email = data.query.taskFounder;
    dataUpdate.update.tasks = data.info.tasks;

    user.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("New Project Task => updateUser(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("User Updated")
        return callback(undefined, true);
    });
}