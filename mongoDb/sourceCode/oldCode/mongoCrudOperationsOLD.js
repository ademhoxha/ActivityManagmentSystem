'use strict';

var mongoCRUD = require('./mongoCRUD').mongoCRUD;

class mongoCrudOperations {
    constructor(mongooseProxy) {
        this.mongoCrudOp = new mongoCRUD(mongooseProxy);
    }
    insert(data, callback) {
        this.mongoCrudOp.insert(data, callback);
    }

    find(data, callback) {
        this.mongoCrudOp.find(data, callback);
    }

    remove(data, callback) {
        this.mongoCrudOp.remove(data, callback);
    }

    update(data, callback) {
        this.mongoCrudOp.update(data, callback);
    }

}

module.exports = {
    mongoCrudOperations: mongoCrudOperations,
}