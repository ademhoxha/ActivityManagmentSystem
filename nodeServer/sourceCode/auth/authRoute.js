var app = require('../server/serverApp').app;
var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var authController = require('./authController').AuthController;

class authRoute extends baseRoute {
    applyRoute() {
        // session
        var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;

        app.all("*", function (req, res, next) {
            return authController.applyController(req, res, next);
        });

    }
}

module.exports = {
    authRoute: authRoute
}