var GetProjectTaskListFlow = require('./getProjectTaskListFlow').GetProjectTaskListFlow;

function getFlow() {
    return new GetProjectTaskListFlow();
}

module.exports = {
    getFlow : getFlow
}