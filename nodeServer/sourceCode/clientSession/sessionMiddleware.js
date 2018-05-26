var baseMiddleware = require('../middlewareUtils/baseMiddleware').baseMiddleware;
var configuration = require('../config/serverConfigUtils');

class sessionMiddleware extends baseMiddleware {
    applyMiddleware() {
        // add client-session to the app
        var standardClientSession = require("./standardClientSession").standardClientSession;

        var time = 1;
        var extendedTime = 0.5;
        var confData = configuration.getConfiguration();
        if (confData && confData.sessionDuration && confData.sessionDuration > 0)
            time = confData.sessionDuration;
        if (confData && confData.sessionDurationExtention && confData.sessionDurationExtention > 0)
            extendedTime = confData.sessionDurationExtention;
        console.log("Session: "+time+ "m - "+extendedTime+"m");
        standardClientSession.applySession(time, extendedTime);
    }
}

module.exports = {
    sessionMiddleware: sessionMiddleware
}