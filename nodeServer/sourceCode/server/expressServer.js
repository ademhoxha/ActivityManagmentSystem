/*
    Author: Adem Hoxha  
    Date: 2018/04/21 
*/
const configUtils = require('../config/serverConfigUtils');
const serverUtils = require('./expressServerUtils.js');

configUtils.loadServerConfiguration(serverUtils.startServer);