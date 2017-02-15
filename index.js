var express = require('express');
var app = express();
var router = express.Router();

app.use('/api', require('./middlewares/auth.js'));

app.use('/api', require('./controllers/helloWorld.js')(router));

app.get('/', function(req, res) {
    res.json({message: 'Hello World!'});
});


app.listen(8080);
