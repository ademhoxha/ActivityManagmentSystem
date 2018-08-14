// load db schema
var models = require('../../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var flow = require('./detectActivityFlow');

var data = {
    email: "adem.hoxha@hotmail.it",
    year: '2002',
    month: "08",
    days: {
        "1": [
            {
                projectName: "PRJ1",
                taskName: "TSK1",
                jobName: "JB1",
                start: "08",
                end: "09"
            },
            {
                projectName: "PRJ2",
                taskName: "TSK1",
                jobName: "JB2",
                start: "08",
                end: "12"
            },
            {
                projectName: "PRJ2",
                taskName: "TSK2",
                jobName: "JB3",
                start: "12",
                end: "17"
            },
        ],
        "3": [
            {
                projectName: "PRJ2",
                taskName: "TSK1",
                jobName: "JB3",
                start: "10",
                end: "12"
            },
            {
                projectName: "PRJ3",
                taskName: "TSK1",
                jobName: "JB5",
                start: "13",
                end: "18"
            },
        ]
    }
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