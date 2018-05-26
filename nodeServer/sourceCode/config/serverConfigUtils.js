/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/
const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname, './serverConfiguration.json');
var configuration;

function loadConfiguration(callback) {
    fs.readFile(configPath, 'utf8', (err, data) => {
        if (err)
            return startServer(err);
        return parseJSON(data, callback);
    });
}

function parseJSON(data, callback) {
    try {
        configuration  = JSON.parse(data);
    }
    catch (err) {
        return startServer(err)
    }
    return validateServerConfiguration(configuration, callback)
}

function validateServerConfiguration(data, callback) {
    
    var err = undefined;
    if(!data){
        err = new Error('Server configuration not founded');
    }
    else if(!data.port){
        err = new Error('Port Not Found');
    }
    else {
        return startServer(null, data, callback);
    }
    return startServer(err);
}

function startServer(err, data, callback) {
    if (err) {
        console.log("Error in application: " + err);
        process.exit(1);
    }
    return callback(data);
}

function loadServerConfiguration(callback){
    return loadConfiguration(callback); 
}

function getConfiguration(){
    return configuration;
}

module.exports = {
    loadServerConfiguration : loadServerConfiguration,
    getConfiguration : getConfiguration
}