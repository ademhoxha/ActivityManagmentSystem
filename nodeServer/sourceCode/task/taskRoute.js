var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var NewProjectTaskRoute = require('./newProjectTask/newProjectTaskRoute').NewProjectTaskRoute;
var GetProjectTaskListRoute = require('./getProjectTaskList/getProjectTaskListRoute').GetProjectTaskListRoute;
var GetTaskRoute = require('./getTask/getTaskRoute').GetTaskRoute;

class TaskRoute extends baseRoute {

    applyRoute() {
        var newProjectTaskRoute = new NewProjectTaskRoute();
        var getProjectTaskListRoute = new GetProjectTaskListRoute();
        var getTaskRoute = new GetTaskRoute();
        
        newProjectTaskRoute.applyRoute();
        getProjectTaskListRoute.applyRoute();
        getTaskRoute.applyRoute();
    }
}

module.exports = {
    TaskRoute: TaskRoute
}