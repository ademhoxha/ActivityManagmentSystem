var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var insertActivitiesController = require('./insertActivitiesController').InsertActivitiesController;

class InsertActivitiesRoute extends baseRoute {

    applyRoute() {
        app.all("/api/job/insertactivities", function (req, res, next) {
            insertActivitiesController.applyController(req, res, next);
        });
    }

}

module.exports = {
    InsertActivitiesRoute: InsertActivitiesRoute
}