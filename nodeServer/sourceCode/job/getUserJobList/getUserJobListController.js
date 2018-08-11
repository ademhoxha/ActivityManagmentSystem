var BaseController = require('../../controllerUtils/baseController').BaseController;
var flowFactory = require('./flowFactory');

class GetUserJobListController extends BaseController {
    applyController(req, res, next) {
        var flow = flowFactory.getFlow();
        flow.applyFlow(req, res, next);
    }
}

var istance = new GetUserJobListController();

module.exports = {
    GetUserJobListController : istance
}

