var GetUserActivitiesFlow = require('./getUserActivitiesFlow').GetUserActivitiesFlow;

function getFlow() {
    return new GetUserActivitiesFlow();
}

module.exports = {
    getFlow : getFlow
}