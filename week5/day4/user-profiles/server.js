var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:8999'
};



app.listen(9000, function(){
    console.log('listening on port 9000');
});