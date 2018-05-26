/*
    Author: Adem Hoxha  
    Date: 2018/04/23 
*/
var app = require('../server/serverApp').app;

var baseRoute = require('./baseRoute').baseRoute;

class standardRoute extends baseRoute {
    applyRoute() {
        super.angularRoute();
    }
}

module.exports = {
    standardRoute : standardRoute
}