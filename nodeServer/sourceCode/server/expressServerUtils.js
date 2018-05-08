/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/
const routeUtils = require('../route/routeUtils');
var app = require('../server/serverApp').app;

function startServer(data) {
    // set route
    //routeUtils.getLoggerRoute().applyRoute();
    routeUtils.getSessionMidd().applyRoute();
    // START API
    routeUtils.getOtpRoute().applyRoute();  // OTP
    routeUtils.getRegistrationRoute().applyRoute(); // NEW USER
    // END API
    routeUtils.getAuthRoute().applyRoute();
    routeUtils.getRuoteClass(data.route).applyRoute();
    // start server
    var port = data.port;
    if (data.port == "HEROKU")
        port = process.env.PORT
    app.set('port', port);
    app.listen(port || 8080); // fix heroku
    console.log("listening on port " + port);
}

module.exports = {
    startServer: startServer
}