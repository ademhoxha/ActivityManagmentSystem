var BaseController = require('../../controllerUtils/baseController').BaseController;
var flowFactory = require('./flowFactory');

class GetProjectTaskListController extends BaseController {
    applyController(req, res, next) {
        var flow = flowFactory.getFlow();
        flow.applyFlow(req, res, next);
    }
}

var istance = new GetProjectTaskListController();

module.exports = {
    GetProjectTaskListController : istance
}

