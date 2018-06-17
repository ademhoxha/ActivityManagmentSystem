var app = require('../server/serverApp').app;
var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var otpAuthController = require('./otpAuthController').OtpAuthController;
var authController = require('./authController').AuthController;
var configuration = require('../config/serverConfigUtils');

class authRoute extends baseRoute {
    applyRoute() {
 
        app.all("*", function (req, res, next) {
            // see if otp is enabled
            var confData = configuration.getConfiguration();
            if(confData && confData.otp && confData.otp == "Y")
                return otpAuthController.applyController(req, res, next);
            return authController.applyController(req, res, next);

        });

    }
}

module.exports = {
    authRoute: authRoute
}