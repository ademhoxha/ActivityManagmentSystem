var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var newProjectController = require('./newProjectController').NewProjectController;

class NewProjectRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            newProjectController.applyController(req, res, next);
        });
    }

}

module.exports = {
    NewProjectRoute: NewProjectRoute
}