/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
var app = require('../server/serverApp').app;

var baseRoute = require('../routeUtils/baseRoute').baseRoute;

class loggerRoute extends baseRoute {
    applyRoute() {
        app.all("*", function (req,res,next) {
            console.log("************ NEW ***********");
            console.log("New Request at : "+Date.now());
            console.log("Req Info :" + require('util').inspect(req.method));
            console.log("Req Info :" + require('util').inspect(req.query));
            console.log("Req Info :" + require('util').inspect(req.params));
            console.log("Body.email "+req.body.email);
            console.log("Body.psw "+req.body.psw);
            next();
        });

        app.all("/api/getUsers", function (req,res) {
            res.send("CIAO");
        });
    }
}

module.exports = {
    loggerRoute : loggerRoute
}