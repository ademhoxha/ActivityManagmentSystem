
class mongoCRUD {
    constructor(mongooseProxy) {
        this.mongooseProxy = mongooseProxy;
    }

    insert(userData, callback) {
        var data = userData;
        data.mongooseProxy = this.mongooseProxy;
        this.getConnection(data, addInMongo, callback);
    }

    find(userData, callback) {
        var data = userData;
        data.mongooseProxy = this.mongooseProxy;
        this.getConnection(data, searchInMongo, callback);
    }

    remove(userData, callback) {
        var data = userData;
        data.mongooseProxy = this.mongooseProxy;
        this.getConnection(data, removeInMongo, callback);
    }

    update(userData, callback){
        var data = userData;
        data.mongooseProxy = this.mongooseProxy;
        this.getConnection(data, updateInMongo, callback);
    }


    getConnection(data, operation, callback) {
        this.mongooseProxy.openConnection(function (error, info) {
            if (error)
                return callback(error);
            return operation(data, callback)
        });
    }

    closeConnection(callback) {
        this.mongooseProxy.closeConnection(callback);
    }

    initializeModel() {
        this.mongooseProxy.getSchema();
    }

}


function addInMongo(data, callback) {
    var mongo = data.mongooseProxy;
    var schema = mongo.initializeSchema();
    var element = new schema(data.query);
    element.save(function (err, element) {
        if (err)
            return callback(err);
        return mongo.closeConnection(callback);
    });
}

function searchInMongo(data, callback) {
    var mongo = data.mongooseProxy;
    var schema = mongo.initializeSchema();
    schema.find(data.query, function (err, item) {
        if (err)
            return callback(err);
        return mongo.closeConnection(callback);
    });
}

function removeInMongo(data, callback) {
    var mongo = data.mongooseProxy;
    var schema = mongo.initializeSchema();
    schema.remove(data.query, function (err) {
        if (err)
            return callback(err);
        return mongo.closeConnection(callback);
    });
}

function updateInMongo(data, callback) {
    var mongo = data.mongooseProxy;
    var schema = mongo.initializeSchema();
    schema.findOneAndUpdate(data.query ,data.update, function (err, item) {
        if (err)
            return callback(err);
        return mongo.closeConnection(callback);
    });
}


module.exports = {
    mongoCRUD: mongoCRUD
}