var baseRoute = require('./baseRoute').baseRoute;

class sessionMiddleware extends baseRoute {
    applyRoute() {
        // add client-session to the app
        var standardClientSession = require("../clientSession/standardClientSession").standardClientSession;
        standardClientSession.applySession(1, 0.5);
    }
}

module.exports = {
    sessionMiddleware: sessionMiddleware
}