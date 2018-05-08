var routeUtils = require('../route/routeUtils')

var path = require('path')
const bodyParser = require('body-parser');

const app = require('./serverApp').app;

//require('../route/routeTest').execRoute();
routeUtils.getRuoteClass('standardRoute').applyRoute();

app.set('port',7777);
app.listen(7777, () => {console.log("Listening on port 7777")});