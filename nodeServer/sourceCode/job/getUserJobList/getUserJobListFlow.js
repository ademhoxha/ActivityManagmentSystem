var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class GetUserJobListFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Get User Job List Flow")
        var none = new NextStepChain();
        var request = new GetJobList(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    GetUserJobListFlow: GetUserJobListFlow,
    TestFlow: StartFlow // only for test
}

class GetJobList extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/getuserjoblist") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                email: req.session.email,
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Get User Job List Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Get User Job List Success")
                    var succ = returnCodeFactory.successRet("Get User Job List Success");
                    return res.status(succ.code).json({
                        message: succ.message,

                        commitedJobList: ret.commitedJobList,
                        executedJobList: ret.executedJobList
                    });
                }
            });

        }
    }
}


var user = EntitiesFactory.getUserEntity();

function StartFlow(userData, callback) {
    var data = {};
    data.query = {
        email: userData.email,
    };
    // validation Data TODO
    findUser(data, callback);
}

function findUser(data, callback) {

    user.find(data, (err, ret) => {
        if (err) {
            console.log("Get User Job List => findUser(data, callback) " + err)
            return callback(returnCodeFactory.dbError());
        }
        else if (ret && ret[0]) {
            console.log("User Found")
            var elabData = ret;

            return mapData(elabData, callback);
        }

        console.log("User Not Found")
        return callback(returnCodeFactory.dataError("User Not Found"));

    });
}

function mapData(data, callback) {
    var ret = {}; // data for the response

    var elabData = {};
    elabData.mongoObj = data;
    var retList = mongoOperations.getJSONPropertiesfromMongo(elabData);

    ret.commitedJobList = [];
    ret.executedJobList = [];

    if (retList[0].committedJobs) {
        retList[0].committedJobs.forEach(element => {
                ret.commitedJobList.push(element);
        });
    }

    if (retList[0].executedJobs) {
        retList[0].executedJobs.forEach(element => {
                ret.executedJobList.push(element);
        });
    }

    console.log(ret);
    return callback(undefined, ret);
}
