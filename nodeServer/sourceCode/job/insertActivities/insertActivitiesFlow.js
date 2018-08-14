var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class InsertActivitiesFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Insert Activities Flow")
        var none = new NextStepChain();
        var request = new NewTaskRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    InsertActivitiesFlow: InsertActivitiesFlow,
    TestFlow: StartFlow // only for test
}

class NewTaskRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        /* if (req.path.toLowerCase() != "/api/job/insertactivity") {
             return super.next(req, res, next);
         }
         else {*/

        var data = {
            email: req.session.email,
            year: req.body.year,
            month: req.body.month,
            days: req.body.days,
        };
        StartFlow(data, (err, ret) => {
            if (err) {
                console.log("Activity Insert Failed")
                return res.status(err.code).json({ message: err.message });
            }
            else {
                console.log("Activity Insert Success")
                var succ = returnCodeFactory.successRet("Activity Insert Success");
                return res.status(succ.code).json({ message: succ.message });
            }
        });

    }
    //}
}


var activity = EntitiesFactory.getActivityEntity();


function StartFlow(userData, callback) {
    var data = {};
    data.query = {

        email: userData.email,
        year: userData.year,
        month: userData.month,
        days: userData.days,
    };
    // validate
    findActivity(data, callback);
}

function findActivity(data, callback) {
    var dataFind = {
        query: {
            email: data.query.email,
            year: data.query.year,
            month: data.query.month,
        }
    };
    activity.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Activity Insert => findActivity(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            data.activities = ret;
            return updateActivities(data, callback);
        }

        return insertNewActivity(data, callback);
    });
}

function insertNewActivity(data, callback) {
    activity.insert(data, (err, ret) => {
        if (err) {
            console.log("Activity Insert => insertNewActivity(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        return callback(undefined, true);
    });
}

function updateActivities(data, callback) {
    var update = {};
    var elabData = {};
    elabData.mongoObj = data.activities;
    var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

    for (var day in data.query.days) {
        if (!retList[0].days[day]) {
            update["days." + day] = data.query.days[day];
        }
        else { // push activities
            if (!update.$push)
                update["$push"] = {};
            update.$push["days." + day] = data.query.days[day];
        }
    }

    var updateData = {};
    updateData.update = update;
    updateData.query = {
        email: data.query.email,
        year: data.query.year,
        month: data.query.month,
    }
    console.log(updateData)
    activity.update(updateData, (err, ret) => {
        if (err) {
            console.log("Activity Insert => updateActivities(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        return callback(undefined, true);
    });
}