var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var GetTaskController = require('./getTaskController').GetTaskController;

class GetTaskRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            GetTaskController.applyController(req, res, next);
        });
    }

}

module.exports = {
    GetTaskRoute: GetTaskRoute
}