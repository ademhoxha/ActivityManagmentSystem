// load db schema
var models = require('../../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var flow = require('./newProjectTaskFlow');

var data = {
    taskFounder: "adem.hoxha@hotmail.it",
    projectName: "TaskAAA",
    taskName: "Task000",
    startDate: new Date(),
    deliveryDate: new Date(),
    selledDays: 10,
    estimatedDays: 5,
    selledCostForDay: 300,
    estimatedCostForDay: 125,
    extraDays: 17,
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