var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var newProjectTaskController = require('./newProjectTaskController').NewProjectTaskController;

class NewProjectTaskRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            newProjectTaskController.applyController(req, res, next);
        });
    }

}

module.exports = {
    NewProjectTaskRoute: NewProjectTaskRoute
}