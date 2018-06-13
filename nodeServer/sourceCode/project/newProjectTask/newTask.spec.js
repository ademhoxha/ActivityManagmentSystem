var flow = require('./newProjectTaskFlow');

var data = {
    taskFounder: "adem.hoxha@hotmail.it",
    projectName: "NewTaskPrj",
    taskName: "Task555",
    startDate: new Date(),
    deliveryDate: new Date(),
    selledDays: 10,
    estimatedDays: 5,
    selledCostForDay: 300,
    estimatedCostForDay: 125
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