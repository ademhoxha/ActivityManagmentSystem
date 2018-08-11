var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var GetProjectTaskListController = require('./getProjectTaskListController').GetProjectTaskListController;

class GetProjectTaskListRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            GetProjectTaskListController.applyController(req, res, next);
        });
    }

}

module.exports = {
    GetProjectTaskListRoute: GetProjectTaskListRoute
}