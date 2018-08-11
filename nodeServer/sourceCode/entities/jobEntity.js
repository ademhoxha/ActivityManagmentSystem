var BaseEntityPrototype = require('mongodb-entities').entitiesFactory.getBaseEntityPrototype();
const dbConfig = require('../config/dbConfig');

class JobEntity extends BaseEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'Job';
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
    JobEntity: JobEntity
}

function mapInsertData(data) {
    var retData = data;
    retData.query.jobAlias = data.query.jobName.toLowerCase();
    return retData;
}


function mapFindRemoveData(data) {
    var retData = data;
    retData.query.jobAlias = data.query.jobName.toLowerCase();
    if (!retData.query.jobAlias)
        retData.query.jobAlias = data.query.jobAlias.toLowerCase();

    return retData;
}

function mapUpdateData(data) {
    var retData = data;
    retData.query.jobAlias = data.query.jobName.toLowerCase();
    if (!retData.query.jobAlias)
        retData.query.jobAlias = data.query.jobAlias.toLowerCase();

    retData.update = data.update;
    return retData;
}