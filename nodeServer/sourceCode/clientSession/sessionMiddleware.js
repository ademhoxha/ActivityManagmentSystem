var baseMiddleware = require('../middlewareUtils/baseMiddleware').baseMiddleware;

class sessionMiddleware extends baseMiddleware {
    applyMiddleware() {
        // add client-session to the app
        var standardClientSession = require("./standardClientSession").standardClientSession;
        standardClientSession.applySession(1, 0.5);
    }
}

module.exports = {
    sessionMiddleware: sessionMiddleware
}