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
        var retData = mapFindRemoveUpdateData(data);
        super.find(retData, callback);
    }

    remove(data, callback) {
        var retData = mapFindRemoveUpdateData(data);
        super.remove(retData, callback);
    }

    update(data, callback) {
        var retData = mapFindRemoveUpdateData(data);
        super.update(retData, callback);
    }
}


module.exports = {
    ProjectTaskEntity: ProjectTaskEntity
}

function mapInsertData(data) {
    var retData = data;
    retData.query.taskAlias = data.query.taskName.toLowerCase();
    return retData;
}

function mapFindRemoveUpdateData(data) {
    console.log(data)
    var retData = data;
    if (data.query.taskName) {
        retData.query.taskAlias = data.query.taskName.toLowerCase();
        delete retData.query.taskName;
    }
    else {
        retData.query.taskAlias = retData.query.taskAlias.toLowerCase();
    }
    if (data.update)
        retData.update = data.update;

    return retData;
}