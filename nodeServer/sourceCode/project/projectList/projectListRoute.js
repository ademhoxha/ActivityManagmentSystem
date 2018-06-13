var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var ProjectListController = require('./projectListController').ProjectListController;

class ProjectListRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            ProjectListController.applyController(req, res, next);
        });
    }

}

module.exports = {
    ProjectListRoute: ProjectListRoute
}