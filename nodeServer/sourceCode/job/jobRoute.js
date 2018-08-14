var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var JobAssignationRoute = require('./jobAssignation/jobAssignationRoute').JobAssignationRoute;
var GetUserJobListRoute = require('./getUserJobList/getUserJobListRoute').GetUserJobListRoute;
var InsertActivitiesRoute = require('./insertActivities/insertActivitiesRoute').InsertActivitiesRoute;
var GetUserActivitiesRoute = require('./getUserActivities/getUserActivitiesRoute').GetUserActivitiesRoute;

class JobRoute extends baseRoute {

    applyRoute() {
        var jobAssignationRoute = new JobAssignationRoute();
        var getUserJobListRoute = new GetUserJobListRoute();
        var insertActivitiesRoute = new InsertActivitiesRoute();
        var getUserActivitiesRoute = new GetUserActivitiesRoute();

        jobAssignationRoute.applyRoute();
        getUserJobListRoute.applyRoute();
        insertActivitiesRoute.applyRoute();
        getUserActivitiesRoute.applyRoute();
    }

}

module.exports = {
    JobRoute: JobRoute
}