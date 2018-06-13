var BaseControllerChain = require('./baseControllerChain').BaseControllerChain;

class NextStepChain extends BaseControllerChain {
    constructor(nextStep) {
        super(nextStep);
    }
    apply(req, res, next) {
        return next();
    }
}

module.exports = {
    NextStepChain : NextStepChain
}