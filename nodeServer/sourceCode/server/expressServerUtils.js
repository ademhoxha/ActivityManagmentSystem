/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/
const routeUtils = require('../route/routeUtils');
var app = require('../server/serverApp').app;

function startServer(data) {
    //routeUtils.getLoggerRoute().applyRoute();
    routeUtils.getSessionMidd().applyRoute(); // apply client session
    // START API
    routeUtils.getOtpRoute().applyRoute();  // otp api
    routeUtils.getRegistrationRoute().applyRoute(); // registration api
    // END API
    routeUtils.getAuthRoute().applyRoute(); // authentication ruote
    routeUtils.getRuoteClass(data.route).applyRoute(); // authentication required route
    // start server
    var port = data.port;
    if (process.env.PORT) // heroku fix
        port = process.env.PORT
    app.set('port', port);
    app.listen(port || 8080); 
    console.log("listening on port " + port);
}

module.exports = {
    startServer: startServer
}