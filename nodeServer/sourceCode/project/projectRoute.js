var baseRoute = require('../routeUtils/baseRoute').baseRoute;
var NewProjectRoute = require('./newProject/newProjectRoute').NewProjectRoute;
var ProjectListRoute = require('./projectList/projectListRoute').ProjectListRoute;
var ProjectAvailableUsersRoute = require('./projectAvailableUsers/projectAvailableUsersRoute').ProjectAvailableUsersRoute;
var EditProjectTeamRoute = require('./editProjectTeam/editProjectTeamRoute').EditProjectTeamRoute;
var RemoveProjectMembersRoute = require('./removeProjectMembers/removeProjectMembersRoute').RemoveProjectMembersRoute;
var GetProjectRoute = require('./getProject/getProjectRoute').GetProjectRoute;


class ProjectRoute extends baseRoute {

    applyRoute() {
        var newProject = new NewProjectRoute();
        var projectList = new ProjectListRoute();
        var availableUserList = new ProjectAvailableUsersRoute();
        var editProjectTem = new EditProjectTeamRoute();
        var removeProjectMembersRoute = new RemoveProjectMembersRoute();
        var getProjectRoute = new GetProjectRoute();
        
        newProject.applyRoute();
        projectList.applyRoute();
        availableUserList.applyRoute();
        editProjectTem.applyRoute();
        removeProjectMembersRoute.applyRoute();
        getProjectRoute.applyRoute();
    }

}

module.exports = {
    ProjectRoute: ProjectRoute
}