var BaseController = require('../../controllerUtils/baseController').BaseController;
var flowFactory = require('./flowFactory');

class GetTaskController extends BaseController {
    applyController(req, res, next) {
        var flow = flowFactory.getFlow();
        flow.applyFlow(req, res, next);
    }
}

var istance = new GetTaskController();

module.exports = {
    GetTaskController : istance
}

