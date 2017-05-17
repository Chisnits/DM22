var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var _ = require('lodash');

var app = express();
app.use(bodyParser.json());

var port = 3000;

var db = massive.connectSync({
  connectionString: 'postgres://fokcxvjwnwqjuc:3ff4f870e60028cfe3e2cbe8d041447306f6d8c9da0c7b6c3dacd858b4d5a1c2@ec2-54-225-107-107.compute-1.amazonaws.com:5432/d9atsohes6u7u9?ssl=true'
})
// console.log(db);

app.get('/', function(req, res) {
  var html = _.template(`
  <html>
    <body>
    <h1> My Injuries</h1>
      <table>
        <% injuries.forEach(function(injury) { %>
          <tr>
            <td><%= injury.name %></td>  
            <td><%= injury.description %></td>  
          </tr>
        <% }) %>
      </table>
    </body>
  </html>
  `);
  

  
    db.getAllInjuries(function(err, injuries) {
      res.send(html({injuries:injuries}));
    })
});

app.get('/incidents', function(req, res) {
  var state = req.query.state;
  var cause = req.query.cause;
  if (state) {
    db.getIncidentsByState([state],function(err, incidents){
      res.send(incidents);
    })
  } else if (cause) {
    db.getIncidentsByCause([cause],function(err, incidents){
      res.send(incidents);
    })
} else {
    db.getAllIncidents(function(err, incidents){
    res.send(incidents);
  })
  }
});

app.post('/incidents', function(req, res) {
  console.log(req.body)
  var incident = req.body;
  db.createIncident([
    incident.state, 
    incident.injuryId, 
    incident.causeId],
    function(err, result) {
      //finish
      db.getIncident([result[0]], function(err, injury) {
        res.send(result[0]);
      })
    // res.send(result[0]);
    })
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
