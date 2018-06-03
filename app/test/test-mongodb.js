'use strict';

const expect = require('chai').expect;
const config = require('../config');
const MongoClient = require('mongodb').MongoClient;
var db;
describe('DBTest', ()=> {
  before( done => {
    MongoClient.connect(config.DB_URI, (err, client) => {
      if (err) done(err);
      db = client.db('testApi');
      done();
    });
  });

  it('DB insert test key value data', done => {
    db.collection('kevValue').insert({key:'France',value:'Paris'});
    done();
  });

  it('DB find key', done => {
    db.collection('kevValue').findOne({key:'France'}).then(result => {
      expect(result.value).to.equal('Paris');
      done();
    }).catch(err => done(err));
  });

  it('DB find non existing key', done => {
    db.collection('kevValue').findOne({key:'Francodia'}).then(result => {
      if(!result) done();
      else done(result);
    }).catch(err => done(err));
  });

  after( done => {
    db.dropDatabase().then( result => {done()}).catch(err => done(err));
  });

});
