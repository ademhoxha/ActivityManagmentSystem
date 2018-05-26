/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/
const routeUtils = require('../routeUtils/routeUtils');
const middlewareUtils = require('../middlewareUtils/middlewareUtils');
var app = require('../server/serverApp').app;

function startServer(data) {

    /* MIDDLEWARES PART */
    middlewareUtils.getSessionMiddleware().applyMiddleware(); // apply client session
    
    
    /* ROUTERS */
    routeUtils.getOtpRoute().applyRoute();  // otp api
    routeUtils.getRegistrationRoute().applyRoute(); // registration api
    routeUtils.getAuthRoute().applyRoute(); // authentication ruote
    
    routeUtils.getRuoteClass(data.route).applyRoute(); // standard route => send angular FE
    
    
    /* START SERVER */
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