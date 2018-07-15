var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class GetProjectFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Get Project Flow")
        var none = new NextStepChain();
        var request = new GetProjectRequest(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    GetProjectFlow: GetProjectFlow,
    TestFlow: StartFlow // only for test
}

class GetProjectRequest extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/getproject") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                email: req.session.email,
                projectName: req.body.projectName,
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Get Project Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Get Project Success")
                    var succ = returnCodeFactory.successRet("Get Project Success");
                    return res.status(succ.code).json({
                        message: succ.message,

                        startDate: ret.startDate,
                        deliveryDate: ret.deliveryDate,

                        selledDays: ret.selledDays,
                        estimatedDays: ret.estimatedDays,

                        remainingSelledDays: ret.remainingSelledDays,
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


var project = EntitiesFactory.getProjectEntity();


function StartFlow(userData, callback) {
    var data = {};
    data.query = {
        email: userData.email,
        projectName: userData.projectName,
    };
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
            console.log("Get Project => findProject(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("Project Found")
            var elabData = ret;

            return mapData(elabData, callback);
        }

        console.log("Project Not Found")
        return callback(returnCodeFactory.dataError("Project Not Found"));

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
    ret.remainingSelledDays = retList[0].selledDays; // remaning selled days

    ret.estimatedDays = retList[0].estimatedDays;  // initial estimated days 
    ret.remainingEstimatedDays = retList[0].estimatedDays; // remaning estimated days

    ret.extraEstimatedDays = 0;
    ret.extraSelledDays = 0;
    if (retList[0].projectTasks) {
        retList[0].projectTasks.forEach(element => {
            if (element.estimatedDays) {
                ret.remainingEstimatedDays = ret.remainingEstimatedDays - element.estimatedDays;
            }
            if (element.selledDays) {
                ret.remainingSelledDays = ret.remainingSelledDays - element.selledDays;
            }
            if (element.extraEstimatedDays) {
                ret.extraEstimatedDays = ret.extraEstimatedDays + element.extraEstimatedDays;
            }
            if (element.extraSelledDays) {
                ret.extraSelledDays = ret.extraSelledDays + element.extraSelledDays;
            }
        });
    }

    console.log(ret);
    return callback(undefined, ret);
}