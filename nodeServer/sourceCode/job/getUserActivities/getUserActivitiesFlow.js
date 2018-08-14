var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class GetUserActivitiesFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Get User Activities Flow")
        var none = new NextStepChain();
        var request = new NewTaskRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    GetUserActivitiesFlow: GetUserActivitiesFlow,
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
            day: req.body.day, // for day activity
        };
        StartFlow(data, (err, ret) => {
            if (err) {
                console.log("Get Activity List Failed")
                return res.status(err.code).json({ message: err.message });
            }
            else {
                console.log("Get Activity List Success")
                var succ = returnCodeFactory.successRet("Get Activity List Success");
                return res.status(succ.code).json({ 
                    message: succ.message,
                    activities: ret.activities,
                });
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
        day: userData.day,
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
    }

    activity.find(dataFind, (err, ret) => {
        if (err) {
            console.log("Get Activity List => findActivity(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        if (ret && ret[0]) {
            data.activities = ret;
        }
        return elaborateData(data, callback);
    });
}


function elaborateData(data, callback) {

    var ret = {}
    ret.activities = {};
    if (data.activities) {
        var elabData = {};
        elabData.mongoObj = data.activities;
        var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

        if (data.query.day && retList[0].days[data.query.day]) {
            ret.activities[data.query.day] = retList[0].days[data.query.day];
        }
        else if(!data.query.day){
            ret.activities = retList[0].days;
        }
    }
    console.log(ret.activities)
    return callback(undefined, ret)
}
