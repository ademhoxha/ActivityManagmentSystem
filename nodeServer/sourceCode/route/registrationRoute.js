var app = require('../server/serverApp').app;
var baseRoute = require('./baseRoute').baseRoute;
var registrationController = require('../controller/registrationController').RegistrationController;

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