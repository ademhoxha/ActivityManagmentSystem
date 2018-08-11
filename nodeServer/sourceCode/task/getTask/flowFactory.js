var TestFlow = require('./getTaskFlow').TestFlow;

function getFlow() {
    return new TestFlow();
}

module.exports = {
    getFlow : getFlow
}