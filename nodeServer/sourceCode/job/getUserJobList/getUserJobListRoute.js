var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var GetUserJobListController = require('./getUserJobListController').GetUserJobListController;

class GetUserJobListRoute extends baseRoute {

    applyRoute() {
        app.all("/api/job/getuserjoblist", function (req, res, next) {
            GetUserJobListController.applyController(req, res, next);
        });
    }

}

module.exports = {
    GetUserJobListRoute: GetUserJobListRoute
}