var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var ProjectAvailableUsersController = require('./projectAvailableUsersController').ProjectAvailableUsersController;

class ProjectAvailableUsersRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            ProjectAvailableUsersController.applyController(req, res, next);
        });
    }

}

module.exports = {
    ProjectAvailableUsersRoute: ProjectAvailableUsersRoute
}