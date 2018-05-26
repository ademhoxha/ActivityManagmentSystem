var app = require('../server/serverApp').app;
var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var registrationController = require('./registrationController').RegistrationController;

class registrationRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            registrationController.applyController(req, res, next);
        });
    }

}

module.exports = {
    registrationRoute: registrationRoute
}