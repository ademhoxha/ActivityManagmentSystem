var BaseEntityPrototype = require('mongodb-entities').entitiesFactory.getBaseEntityPrototype();
const dbConfig = require('../config/dbConfig');

class ProjectEntity extends BaseEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'Project';
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

    getProjectKey(projectName) {
        return projectName.toLowerCase();
    }
}


module.exports = {
    ProjectEntity: ProjectEntity
}

function mapInsertData(data){
    var retData = data;
    retData.query.projectAlias = data.query.projectName.toLowerCase();
    return retData;
}


function mapFindRemoveData(data){
    var retData = { query : {} };
    retData.query.projectAlias = data.query.projectName.toLowerCase();
    if(!retData.query.projectAlias)
        retData.query.projectAlias = data.query.projectAlias.toLowerCase();
    return retData;
}

function mapUpdateData(data){
    var retData = { query : {} };
    retData.query.projectAlias = data.query.projectName.toLowerCase();
    if(!retData.query.projectAlias)
        retData.query.projectAlias = data.query.projectAlias.toLowerCase();

    retData.update = data.update;
    return retData;
}