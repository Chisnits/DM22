const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const data = require('./data.js')

let app = express();

app.use(bodyParser.json());

app.get('/api/data', function(req, res, next) {
	res.status(200).json(data);
});

app.get('/api/data', function(req, res, next){
	let q = req.query;
	const filterData = data.filter( function(obj){
		for (let key in q){
			if(obj[key] !== q[key]){
				return false;
			}
		}
		return true;
	})

	res.status(200).send(filterData);
});

app.get('/api/data/:id', function(req, res, next){
	let id = req.params.id
	res.status(200).json(data[id]);
});

app.delete('/api/data/:id', function(req, res, next){
	var removed = data.splice(req.params.id, 1);
	res.status(200).send(removed[0]);
});

app.put('api/data/:id', function(req, res, next){
	var i = req.params.id;
	var q = req.query;
	for(let key in obj){
		data[i][key] = q[key];
	}
	res.status(200).send(data[i]);
});


app.listen(port, function() {
	console.log('Listening on port',port);
})