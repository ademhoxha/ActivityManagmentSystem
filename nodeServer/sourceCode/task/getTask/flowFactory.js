var GetTaskFlow = require('./getTaskFlow').GetTaskFlow;

function getFlow() {
    return new GetTaskFlow();
}

module.exports = {
    getFlow : getFlow
}