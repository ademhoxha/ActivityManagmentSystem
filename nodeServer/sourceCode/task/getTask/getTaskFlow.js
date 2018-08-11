var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class GetTaskFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Get Task Flow")
        var none = new NextStepChain();
        var request = new GetTaskRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    GetTaskFlow: GetTaskFlow,
    TestFlow: StartFlow // only for test
}

class GetTaskRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/gettask") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                projectName: req.body.projectName,
                taskName: req.body.taskName,
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Get Task Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Get Task Success")
                    var succ = returnCodeFactory.successRet("Get Task Success");
                    return res.status(succ.code).json({
                        message: succ.message,

                        startDate: ret.startDate,
                        deliveryDate: ret.deliveryDate,

                        selledDays: ret.selledDays,
                        estimatedDays: ret.estimatedDays,

                        remainingEstimatedDays: ret.remainingEstimatedDays,

                        extraSelledDays: ret.extraSelledDays,
                        extraEstimatedDays: ret.extraEstimatedDays,

                        selledCostForDay: ret.selledCostForDay,
                        estimatedCostForDay: ret.estimatedCostForDay
                    });
                }
            });

        }
    }
}


var task = EntitiesFactory.getProjectTaskEntity();


function StartFlow(userData, callback) {
    var data = {};
    data.query = {
        projectName: userData.projectName,
        taskName: userData.taskName,
    };
    // validation Data TODO
    findTask(data, callback);
}

function findTask(data, callback) {

    task.find(data, (err, ret) => {
        if (err) {
            console.log("Get Task => findTask(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Task Found")
            var elabData = ret;

            return mapData(elabData, callback);
        }

        console.log("Task Not Found")
        return callback(returnCodeFactory.dataError("Task Not Found"));

    });
}

function mapData(data, callback) {
    var ret = {}; // data for the response

    var elabData = {};
    elabData.mongoObj = data;
    var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

    ret.startDate = retList[0].startDate;
    ret.deliveryDate = retList[0].deliveryDate;

    ret.selledCostForDay = retList[0].selledCostForDay;
    ret.estimatedCostForDay = retList[0].estimatedCostForDay;

    ret.selledDays = retList[0].selledDays; // initial selled days 
    ret.estimatedDays = retList[0].estimatedDays;  // initial estimated days 

    ret.extraEstimatedDays = retList[0].extraEstimatedDays; // extra estimated days 
    ret.extraSelledDays = retList[0].extraSelledDays; // remaning selled days

    ret.remainingEstimatedDays = retList[0].estimatedDays; // remaning estimated days
    if(ret.extraEstimatedDays){
        ret.remainingEstimatedDays += retList[0].extraEstimatedDays; 
    }
    
    if (retList[0].jobs) {
        /*retList[0].jobs.forEach(element => {
            if (element.estimatedDays) {
                ret.remainingEstimatedDays = ret.remainingEstimatedDays - element.estimatedDays;
            }
        });*/
        ret.remainingEstimatedDays = retList[0].jobs.reduce( function(acc, currValue) {
            if(currValue.estimatedDays)
                return acc - currValue.estimatedDays;
            return acc;
        }, ret.remainingEstimatedDays)
    }

    console.log(ret);
    return callback(undefined, ret);
}