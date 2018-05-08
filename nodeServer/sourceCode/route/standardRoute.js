/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
var app = require('../server/serverApp').app;

var baseRoute = require('./baseRoute').baseRoute;

class standardRoute extends baseRoute {
    applyRoute() {
        app.all("/api", function (req,res) {
            console.log("API MUST BE OK")
            //res.send("REST-FULL WILL BE IMPORTED SOON");
            res.json({xxxx : "yyyy"});
            console.log("API RES SENDED")
        });
        super.angularRoute();
        //super.notFound();
    }
}

module.exports = {
    standardRoute : standardRoute
}