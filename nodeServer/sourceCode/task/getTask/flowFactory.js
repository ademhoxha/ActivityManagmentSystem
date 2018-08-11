var GetProjectFlow = require('./getProjectFlow').GetProjectFlow;

function getFlow() {
    return new GetProjectFlow();
}

module.exports = {
    getFlow : getFlow
}