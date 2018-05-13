var app = require('../server/serverApp').app;
var baseRoute = require('./baseRoute').baseRoute;
var loginController = require('../controller/loginController').LoginController;

class authRoute extends baseRoute {
    applyRoute() {
        // session
        var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;

        app.all("*", function (req, res, next) {
            return loginController.applyController(req, res, next);
        });

    }
}

module.exports = {
    authRoute: authRoute
}