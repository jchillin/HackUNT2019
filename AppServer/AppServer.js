var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
const port = 8000;
var database = require("./Database.json");
var minutes = 5, the_interval = minutes * 60 * 1000;
//var seconds = 10, the_interval = seconds * 1000;
setInterval(function() {
  fs.writeFile('./Database.json',JSON.stringify(database),(err)=>{
    if(err) throw err;
  });
  console.log("Backup complete");
},the_interval);

// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };


app.use(bodyParser.json({
  limit: '50mb',
  type: 'application/json',
  extended: true
}))
app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  limit: '50mb',
  extended: true
}))

app.post('/addShelter',function(req,res){
  let message = req.body.shelter;
  
    database.shelters.push({name:message.name, coord:{ lat:message.coord.lat, long:message.coord.long }});
    res.send("Success");
})

app.get('/getShelter', function (req, res) {
  res.send(database.shelters);
})

app.get('/getPersons', function (req, res) {
  res.send(database.persons);
})

app.post('/postPersons',function(req,res){
  let message = req.body;
  database.persons.push({ name:message.name, lat:message.lat, long:message.long });
  res.send("Success");
})


app.listen(port, () => console.log('Listening on port ' + port))
