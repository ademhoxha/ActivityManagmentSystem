var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var getUserActivitiesController = require('./getUserActivitiesController').GetUserActivitiesController;

class GetUserActivitiesRoute extends baseRoute {

    applyRoute() {
        app.all("/api/job/getuseractivities", function (req, res, next) {
            getUserActivitiesController.applyController(req, res, next);
        });
    }

}

module.exports = {
    GetUserActivitiesRoute: GetUserActivitiesRoute
}