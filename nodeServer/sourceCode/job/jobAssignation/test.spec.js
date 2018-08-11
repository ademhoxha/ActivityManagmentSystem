// load db schema
var models = require('../../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var flow = require('./jobAssignationFlow');

var data = {
    jobCommitter : "adem.hoxha@hotmail.it",
    jobExecuter: 'test.test@libero.it',

    projectName: "TaskAAA",
    taskName: "TaskA",
    jobName: "Job333",

    startDate: new Date(),
    deliveryDate: new Date(),

    estimatedDays: 5,

    estimatedCostForDay: 125,
    extraEstimatedDays: 17,
}

flow.TestFlow(data, (err, ret) => {
    if (err) {
        console.log("Test Error")
        console.log(err);
    }
    else {
        console.log("Test Success")
    }
})