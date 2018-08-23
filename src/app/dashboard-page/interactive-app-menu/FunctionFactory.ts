export class FunctionFactory {

    generateFunctions(id) {
        if (id == 'projects')
            return projectFunctions();
        else if (id == 'tasks')
            return taskFunctions();
        else if (id == 'jobs')
            return jobFunctions();
        else if (id == 'activities')
            return activityFunctions();
        else if (id == 'analysis')
            return analysisFunctions();

        return [];
    }
}

function projectFunctions() {
    return [
        { url: 'newproject', name: 'New Project', icon: 'fa fa-plus-circle' },
        { url: '', name: 'Edit Project', icon: 'fa fa-edit' },
        { url: '', name: 'Close Project', icon: 'fa fa-check-circle' },

        { url: 'newprojectteam', name: 'Add Project Members', icon: 'fa fa-user-plus' },
        { url: 'removeprojectmember', name: 'Remove Project Members', icon: 'fa fa-user-times' },
    ];
}

function taskFunctions() {
    return [
        { url: 'newprojecttask', name: 'New Project Task', icon: 'fa fa-plus-circle' },
        { url: '', name: 'Edit Project Task', icon: 'fa fa-edit' },
        { url: '', name: 'Close Project Task', icon: 'fa fa-check-circle' },
    ];
}

function jobFunctions() {
    return [
        { url: 'jobassignation', name: 'Job Assignation', icon: 'fa fa-plus-circle' },
        { url: '', name: 'Edit Job', icon: 'fa fa-edit' },
        { url: '', name: 'Close Job', icon: 'fa fa-check-circle' },
    ];
}

function activityFunctions() {
    return [
        { url: 'insertdayactivity', name: 'Insert Day Activity', icon: 'fa fa-plus-circle' },
        { url: 'managemonthactivity', name: 'Manage Month Activity', icon: 'fa fa-calendar' },
        { url: '', name: 'Activity Problems', icon: 'fa fa-exclamation-circle' },
    ];
}

function analysisFunctions() {
    return [
        { url: '', name: 'Not Available yet', icon: 'fa fa-ban' },
    ];
}