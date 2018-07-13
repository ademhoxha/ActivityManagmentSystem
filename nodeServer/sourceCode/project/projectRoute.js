var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var NewProjectRoute = require('./newProject/newProjectRoute').NewProjectRoute;
var ProjectListRoute = require('./projectList/projectListRoute').ProjectListRoute;
var ProjectAvailableUsersRoute = require('./projectAvailableUsers/projectAvailableUsersRoute').ProjectAvailableUsersRoute;
var EditProjectTeamRoute = require('./editProjectTeam/editProjectTeamRoute').EditProjectTeamRoute;
var NewProjectTaskRoute = require('./newProjectTask/newProjectTaskRoute').NewProjectTaskRoute;
var RemoveProjectMembersRoute = require('./removeProjectMembers/removeProjectMembersRoute').RemoveProjectMembersRoute;

class ProjectRoute extends baseRoute {

    applyRoute() {
        var newProject = new NewProjectRoute();
        var projectList = new ProjectListRoute();
        var availableUserList = new ProjectAvailableUsersRoute();
        var editProjectTem = new EditProjectTeamRoute();
        var newProjectTaskRoute = new NewProjectTaskRoute();
        var removeProjectMembersRoute = new RemoveProjectMembersRoute();
        
        newProject.applyRoute();
        projectList.applyRoute();
        availableUserList.applyRoute();
        editProjectTem.applyRoute();
        newProjectTaskRoute.applyRoute();
        removeProjectMembersRoute.applyRoute();
    }

}

module.exports = {
    ProjectRoute: ProjectRoute
}