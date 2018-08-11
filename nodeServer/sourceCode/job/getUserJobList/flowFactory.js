var GetUserJobListFlow = require('./getUserJobListFlow').GetUserJobListFlow;

function getFlow() {
    return new GetUserJobListFlow();
}

module.exports = {
    getFlow : getFlow
}