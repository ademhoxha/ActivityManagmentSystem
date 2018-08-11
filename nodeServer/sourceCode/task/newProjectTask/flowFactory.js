var NewProjectTaskFlow = require('./newProjectTaskFlow').NewProjectTaskFlow;

function getFlow() {
    return new NewProjectTaskFlow();
}

module.exports = {
    getFlow : getFlow
}