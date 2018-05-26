var app = require('../server/serverApp').app;
var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var otpController = require('./otpController').OTPController;

class otpRoute extends baseRoute {

    applyRoute() {
        app.all("*", function (req, res, next) {
            otpController.applyController(req, res, next);
        });
    }

}

module.exports = {
    otpRoute: otpRoute
}