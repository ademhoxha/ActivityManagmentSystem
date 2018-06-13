// Mongo DB Object utils

function fromMongoObjToJSON(mongoObj) {
    var obj = mongoObj.toObject();
    delete obj._id;
    return obj;
}

function fromMongoObjListToJSONList(data) {
    var mongoObjList = data.mongoObj;
    if (mongoObjList instanceof Array) {
        var retList = [];
        mongoObjList.forEach(element => {
            retList.push(fromMongoObjToJSON(element));
        });
        return retList;
    }
    
    return fromMongoObjToJSON(mongoObjList);
}

function getJSONPropertiesFromMongoObj(data) {
    var obj = fromMongoObjToJSON(data.mongoObj);
    var retObj = {};
    if (!data.properties)
        return obj; // return all properties

    data.properties.forEach(element => {
        if (obj[element])
            retObj[element] = obj[element];
    });
    return retObj;
}

function getJSONListPropertiesFromMongoObjList(data){
    if(data.mongoObj instanceof Array){
        var retObj = [];
        data.mongoObj.forEach(element => {
            var tempData = {};
            tempData.mongoObj = element;
            tempData.properties = data.properties;
            retObj.push(getJSONPropertiesFromMongoObj(tempData));
        });
        return retObj;
    }
    return getJSONPropertiesFromMongoObj(data);
}

module.exports = {
    getJSONfromMongo : fromMongoObjListToJSONList,
    getJSONPropertiesfromMongo : getJSONListPropertiesFromMongoObjList
}