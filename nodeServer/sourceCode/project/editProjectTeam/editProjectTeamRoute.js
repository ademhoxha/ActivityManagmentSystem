var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var editProjectTeamController = require('./editProjectTeamController').EditProjectTeamController;

class EditProjectTeamRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            editProjectTeamController.applyController(req, res, next);
        });
    }

}

module.exports = {
    EditProjectTeamRoute: EditProjectTeamRoute
}