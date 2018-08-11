var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var JobAssignationRoute = require('./jobAssignation/jobAssignationRoute').JobAssignationRoute;
var GetUserJobListRoute = require('./getUserJobList/getUserJobListRoute').GetUserJobListRoute;

class JobRoute extends baseRoute {

    applyRoute() {
        var jobAssignationRoute = new JobAssignationRoute();
        var getUserJobListRoute = new GetUserJobListRoute();

        jobAssignationRoute.applyRoute();
        getUserJobListRoute.applyRoute();
    }

}

module.exports = {
    JobRoute: JobRoute
}