var BaseFlow = require('../../flowUtils/baseFlow').BaseFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class GetProjectTaskListFlow extends BaseFlow {

    applyFlow(req, res, next) {
        console.log("Get Project Task List Flow")
        var none = new NextStepChain();
        var request = new GetTaskList(none);
        request.apply(req, res, next);
    }
}

module.exports = {
    GetProjectTaskListFlow: GetProjectTaskListFlow,
    TestFlow: StartFlow // only for test
}

class GetTaskList extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        if (req.path.toLowerCase() != "/api/project/getprojecttasklist") {
            return super.next(req, res, next);
        }
        else {

            var data = {
                projectName: req.body.projectName,
            };
            StartFlow(data, (err, ret) => {
                if (err) {
                    console.log("Get Project Task List Failed")
                    return res.status(err.code).json({ message: err.message });
                }
                else {
                    console.log("Get Project Task List Success")
                    var succ = returnCodeFactory.successRet("Get Project Task List Success");
                    return res.status(succ.code).json({
                        message: succ.message,

                        taskList: ret.taskList
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
            console.log("Get Project Task List => findProject(data, callback) " + err)
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

    ret.taskList = [];
    if (retList[0].projectTasks) {
        retList[0].projectTasks.forEach(element => {
            if (element.taskName) {
                ret.taskList.push(element.taskName);
            }
        });
    }

    console.log(ret);
    return callback(undefined, ret);
}
