var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var RemoveProjectMembersController = require('./removeProjectMembersController').RemoveProjectMembersController;

class RemoveProjectMembersRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            RemoveProjectMembersController.applyController(req, res, next);
        });
    }

}

module.exports = {
    RemoveProjectMembersRoute: RemoveProjectMembersRoute
}