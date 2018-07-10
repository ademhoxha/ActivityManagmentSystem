var BaseEntityPrototype = require('mongodb-entities').entitiesFactory.getBaseEntityPrototype();
const dbConfig = require('../config/dbConfig');

class ProjectTaskEntity extends BaseEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'ProjectTask';
        super(data);
    }

    insert(data, callback) {
        var retData = mapInsertData(data);
        super.insert(retData, callback);
    }

    find(data, callback) {
        var retData = mapFindRemoveData(data);
        super.find(retData, callback);
    }

    remove(data, callback) {
        var retData = mapFindRemoveData(data);
        super.remove(retData, callback);
    }

    update(data, callback) {
        var retData = mapUpdateData(data);
        super.update(retData, callback);
    }
}


module.exports = {
    ProjectTaskEntity: ProjectTaskEntity
}

function mapInsertData(data){
    var retData = data;
    retData.query.taskAlias = data.query.taskName.toLowerCase();
    return retData;
}


function mapFindRemoveData(data){
    var retData = data;
    retData.query.taskAlias = data.query.taskName.toLowerCase();
    if(!retData.query.taskAlias)
        retData.query.taskAlias = data.query.taskAlias.toLowerCase();

    return retData;
}

function mapUpdateData(data){
    var retData = data;
    retData.query.taskAlias = data.query.taskName.toLowerCase();
    if(!retData.query.taskAlias)
        retData.query.taskAlias = data.query.taskAlias.toLowerCase();

    retData.update = data.update;
    return retData;
}