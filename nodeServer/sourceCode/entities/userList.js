var BaseEntityPrototype = require('../../../mongoDb/publicDbAPI/publicDBApi').publicDBApi.getBaseEntityPrototype();
const dbConfig = require('../config/dbConfig');

class UserList extends BaseEntityPrototype {

    constructor() {
        var data = {}
        data.dbName = dbConfig.userDbName
        data.schemaName = 'UserList';
        super(data);
    }

    insert(data, callback) {
        super.insert(data, callback);
    }

    find(data, callback) {
        super.find(data, callback);
    }

    remove(data, callback) {
        super.remove(data, callback);
    }

    update(data, callback) {
        super.update(data, callback);
    }

}


module.exports = {
    UserList: UserList
}