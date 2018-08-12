var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class JobAssignationFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Job Assignation Flow")
        var none = new NextStepChain();
        var request = new NewTaskRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    JobAssignationFlow: JobAssignationFlow,
    TestFlow: StartFlow // only for test
}

class NewTaskRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/job/jobassignation") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                projectName: req.body.projectName,
                taskName: req.body.taskName,
                jobName: req.body.jobName,

                jobCommitter: req.session.email,
                jobExecuter: req.body.jobExecuter,

                startDate: req.body.startDate,
                deliveryDate: req.body.deliveryDate,

                estimatedDays: req.body.estimatedDays,
                estimatedCostForDay: req.body.estimatedCostForDay,

                extraEstimatedDays: req.body.extraEstimatedDays
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Job Assignation Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Job Assignation Success")
                    var succ = returnCodeFactory.successRet("Job Assignation Success");
                    return res.status(succ.code).json({ message: succ.message });
                }
            });

        }
    }
}


var project = EntitiesFactory.getProjectEntity();
var user = EntitiesFactory.getUserEntity();
var task = EntitiesFactory.getProjectTaskEntity();
var job = EntitiesFactory.getJobEntity();


function StartFlow(userData, callback) {
    var data = {};
    data.query = {

        projectName: userData.projectName,
        taskName: userData.taskName,
        jobName: userData.jobName,

        jobCommitter: userData.jobCommitter,
        jobExecuter: userData.jobExecuter,
        startDate: userData.startDate,
        deliveryDate: userData.deliveryDate,
        estimatedDays: userData.estimatedDays,
        estimatedCostForDay: userData.estimatedCostForDay,

    };
    // estra days
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
            console.log("Job Assignation => findProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Project Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["projectJobs"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info = {};
            data.info.projectJobs = [{
                taskName: data.query.taskName,
                jobName: data.query.jobName,

                estimatedDays: data.query.estimatedDays,
                jobExecuter: data.query.jobExecuter,

            }];

            if (data.query.extraEstimatedDays)
                data.info.projectJobs[0].extraEstimatedDays = data.query.extraEstimatedDays;

            if (retList && retList[0].projectJobs && retList[0].projectJobs.length > 0) {
                data.info.projectJobs = data.info.projectJobs.concat(retList[0].projectJobs);
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
            console.log("Job Assignation => findTask(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Task Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["jobs"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info.taskJobs = [{
                jobName: data.query.jobName,

                estimatedDays: data.query.estimatedDays,
                jobExecuter: data.query.jobExecuter,

            }];

            if (data.query.extraEstimatedDays)
                data.info.taskJobs[0].extraEstimatedDays = data.query.extraEstimatedDays;

            if (retList && retList[0].jobs && retList[0].jobs.length > 0) {
                data.info.taskJobs = data.info.taskJobs.concat(retList[0].jobs);
            }

            return findExecuter(data, callback);
        }

        console.log("Task Not Found")
        return callback(returnCodeFactory.dataError("Task Not Found"));

    });
}

function findExecuter(data, callback) {
    var dataFind = {
        query: {
            email: data.query.jobExecuter
        }
    }
    user.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Job Assignation => findExecuter(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Executer Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["executedJobs"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info.executerJobs = [data.query.jobName];
            if (retList && retList[0].executedJobs && retList[0].executedJobs.length > 0) {
                data.info.executerJobs = data.info.executerJobs.concat(retList[0].executedJobs)
            }

            return findCommiter(data, callback);
        }

        console.log("Executer Not Found")
        return callback(returnCodeFactory.dataError("Executer Not Found"));
    })
}

function findCommiter(data, callback) {
    var dataFind = {
        query: {
            email: data.query.jobCommitter
        }
    }
    user.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Job Assignation => findCommiter(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Commiter Found")
            var elabData = {};
            elabData.mongoObj = ret;
            elabData.properties = ["committedJobs"];
            var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

            data.info.committerJobs = [data.query.jobName];
            if (retList && retList[0].committedJobs && retList[0].committedJobs.length > 0) {
                data.info.committerJobs = data.info.committerJobs.concat(retList[0].committedJobs)
            }

            return findJob(data, callback);
        }

        console.log("Commiter Not Found")
        return callback(returnCodeFactory.dataError("Commiter Not Found"));
    })
}

function findJob(data, callback) {

    var dataFind = {
        query: {
            projectName: data.query.projectName,
            taskName: data.query.taskName,
            jobName: data.query.jobName
        }
    }

    job.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Job Assignation => findJob(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("This task has a job with the same name")
            return callback(returnCodeFactory.dataError("Job Name Used"));
        }

        console.log("Job Name Available for this task");
        return newJob(data, callback);
    });
}

function newJob(data, callback) {

    var dataInsert = data;
    console.log("NEW JOB")
    console.log(dataInsert.query)

    job.insert(dataInsert, (err, ret) => {
        if (err) {
            console.log("Job Assignation => newJob(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Job Assigned")
        return editProject(data, callback);
    });
}

function editProject(data, callback) {
    var dataUpdate = { query: {}, update: {} }

    dataUpdate.query.projectName = data.query.projectName;

    dataUpdate.update.projectJobs = data.info.projectJobs;

    console.log("editProject")
    console.log(dataUpdate)

    project.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("Job Assignation => editProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Project Successfuly Modified")
        return editTask(data, callback);
    });
}

function editTask(data, callback) {
    var dataUpdate = { query: {}, update: {} }

    dataUpdate.query.taskName = data.query.taskName;

    dataUpdate.update.jobs = data.info.taskJobs;

    console.log("editTask")
    console.log(dataUpdate)

    task.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("Job Assignation => editTask(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Task Successfuly Modified")
        return editCommitter(data, callback);
    });
}


function editCommitter(data, callback) {
    var dataUpdate = { query: {}, update: {} }
    dataUpdate.query.email = data.query.jobCommitter;
    dataUpdate.update.committedJobs = data.info.committerJobs;

    console.log("editCommitter")
    console.log(dataUpdate)

    user.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("Job Assignation => editCommitter(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Committer Updated")
        return editExecuter(data, callback);
    });
}


function editExecuter(data, callback) {
    var dataUpdate = { query: {}, update: {} }
    dataUpdate.query.email = data.query.jobExecuter;
    dataUpdate.update.executedJobs = data.info.executerJobs;

    console.log("editExecuter")
    console.log(dataUpdate)

    user.update(dataUpdate, (err, ret) => {
        if (err) {
            console.log("Job Assignation => editExecuter(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        console.log("Executer Updated")
        return callback(undefined, true);
    });
}