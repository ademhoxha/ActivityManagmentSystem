var ProjectEntity= require('../entities/projectEntity').ProjectEntity;
var SecretUserEntity= require('../entities/secretUserEntity').SecretUserEntity;
var UserList= require('../entities/userList').UserList;
var ProjectTaskEntity = require('../entities/projectTaskEntity').ProjectTaskEntity;


class EntitiesFactory {
    getProjectEntity(){
        return new ProjectEntity();
    }
    getUserEntity(){
        return new SecretUserEntity();
    }
    getUserList(){
        return new UserList();
    }
    getProjectTaskEntity(){
        return new ProjectTaskEntity();
    }
}

var istance = new EntitiesFactory();

module.exports = {
    EntitiesFactory : istance
}