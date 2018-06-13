var localDb = 'mongodb://localhost/test'; // local db

var mLabTrunk = 'mongodb://wmf001:watchm3fl1@ds115740.mlab.com:15740/wmf-mlab001'; // first test (dirty data)

var mLabSit = 'mongodb://wmf001:watchm3fl1@ds147450.mlab.com:47450/wmf-sit'; // simulate pre-production (clean data but not real)

var mLabUAT = 'mongodb://wmf001:watchm3fl1@ds147450.mlab.com:47450/wmf-uat'; // pre production (clean and real-like data)

module.exports = {
    userDbName : mLabTrunk
}