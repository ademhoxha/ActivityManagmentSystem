var RemoveProjectMembersFlow = require('./removeProjectMembersFlow').RemoveProjectMembersFlow;

function getFlow() {
    return new RemoveProjectMembersFlow();
}

module.exports = {
    getFlow : getFlow
}