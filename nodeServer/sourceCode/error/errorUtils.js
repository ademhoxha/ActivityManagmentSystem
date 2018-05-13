const path = require('path');
const fs = require('fs');
const configPath = path.join(__dirname, './errorTemplate.json');

var buf = fs.readFileSync(configPath, 'utf8')
var configuration = JSON.parse(buf);

module.exports = {
    serverCodes : configuration
}

