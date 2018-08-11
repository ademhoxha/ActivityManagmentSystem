var JobAssignationFlow = require('./jobAssignationFlow').JobAssignationFlow;

function getFlow() {
    return new JobAssignationFlow();
}

module.exports = {
    getFlow : getFlow
}