const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');
const port = 3000;


let app = express();
app.use(bodyParser.json());

app.get('/api/data', function(req, res, next){
    res.status(200).json({
        statusCode:'ok',
        data: data})
});

app.post('/api/data', function(req, res, next){
    const postData = req.body;
	data.push(postData);
	res.status(200).send('ok');
});

app.listen(port, function() {
	console.log('Listening on port', port);
})