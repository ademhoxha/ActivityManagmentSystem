var BaseRevertFlow = require('../../flowUtils/baseFlow').BaseRevertFlow
var BaseControllerChain = require('../../flowUtils/baseControllerChain').BaseControllerChain;
var NextStepChain = require('../../flowUtils/nextChainStep').NextStepChain;

var EntitiesFactory = require('../../entitiesUtils/entitiesFactory').EntitiesFactory;
var returnCodeFactory = require('../../error/returnCodeFactory').ReturnCodeFactory;
var mongoOperations = require('../../entitiesUtils/mongoOperations');


class InsertActivitiesFlowRevertFlow extends BaseRevertFlow {

    revertFlow(data, callBack) {
        console.log("Job Assignation Revert Flow");
    }
}

module.exports = {
    InsertActivitiesFlowRevertFlow: InsertActivitiesFlowRevertFlow,
    TestFlow: StartFlow // only for test
}

