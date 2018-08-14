// load db schema
var models = require('../../entities/models').Models;
var entitiesFactory = require('mongodb-entities').entitiesFactory;
entitiesFactory.setModel(models);

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;

var data = {
    jobCommitter: "adem.hoxha@hotmail.it",
    jobExecuter: 'test.test@libero.it',

    projectName: "TaskTest",
    taskName: "TaskA",/*TaskA,TaskB,TaskC */
    jobName: "JobAA001",

    startDate: new Date(),
    deliveryDate: new Date(),

    estimatedDays: 5,

    estimatedCostForDay: 125,
    extraEstimatedDays: 17,
}

var user = EntitiesFactory.getUserEntity();

/*var queryData = {
    query: {
        email: "adem.hoxha@hotmail.it",
        "otp.code": "481575",
    },
    update: {
        $push: {
            projects : {
                test : "test",
                xx : "xx"
            }
        }
    }
}*/

/*var queryData = {
    query: {
        email: "adem.hoxha@hotmail.it",
        "otp.code": "481575",
    },
    update: {
        $push: {
            "committedJobs.TaskAAA.TaskA" : "testTest"
        }
    }
}*/

/*var str = "committedJobs."+data.projectName+"."+data.taskName;
var queryData = {
    query: {
        email: "adem.hoxha@hotmail.it",
        "otp.code": "481575",
    },
    update: {
        $push: { }
    }
}
queryData.update.$push[str] = "testTest"*/

var str = "committedJobs." + data.projectName + "." + data.taskName;
var queryData = {
    query: {
        email: "adem.hoxha@hotmail.it",
        "otp.code": "481575",
    },
    update: {}
}
queryData.update[str] ="TEST";

console.log(queryData.update)

user.update(queryData, (err, ret) => {
    if (err)
        return console.log("Error")
    console.log("OK")
    console.log(ret)
})