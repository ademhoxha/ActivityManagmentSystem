var app = require('../../server/serverApp').app;
var baseRoute = require('../../routeUtils/baseRoute').baseRoute;
var jobAssignationController = require('./jobAssignationController').JobAssignationController;

class JobAssignationRoute extends baseRoute {

    applyRoute() {
        app.all("/api/job/jobassignation", function (req, res, next) {
            jobAssignationController.applyController(req, res, next);
        });
    }

}

module.exports = {
    JobAssignationRoute: JobAssignationRoute
}