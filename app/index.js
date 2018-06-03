const express = require('express');
const config = require('./config');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var db;
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/v1/key/:keyId/value/:valueId', (req, res) => {
  db.collection('kevValue').insert({key:req.params.keyId,value:req.params.valueId}).then((data) => res.send({})).catch(err => res.send(err));
});

app.get('/v1/key/:keyId', (req, res) => {
  db.collection('kevValue').findOne({key:req.params.keyId}).then(data => {
    if(!data) res.status(404).send({});
    else res.send({value:data.value});
  }).catch(err => res.send(err));
});

MongoClient.connect(config.DB_URI, (err, client) => {
  if (err) return console.log(err)
  db = client.db('api');
  app.listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}!`);
  });
});
