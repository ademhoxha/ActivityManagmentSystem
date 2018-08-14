var InsertActivitiesFlow = require('./insertActivitiesFlow').InsertActivitiesFlow;

function getFlow() {
    return new InsertActivitiesFlow();
}

module.exports = {
    getFlow : getFlow
}