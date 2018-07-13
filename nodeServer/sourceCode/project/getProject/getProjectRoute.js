var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var GetProjectController = require('./getProjectController').GetProjectController;

class GetProjectRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            GetProjectController.applyController(req, res, next);
        });
    }

}

module.exports = {
    GetProjectRoute: GetProjectRoute
}