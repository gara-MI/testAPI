
const expect = require('chai').expect;
const request = require('request');
const config = require('../config');
const uri = `http://${config.HOST}:${config.PORT}`;

describe('APITest' , ()=> {
  it('Post the request key:value', done => {
    request.post(`${uri}/v1/key/France/value/Paris`,{}, (err, response, body) => {
      if(err) done(err);
      expect(body).to.equal('{}');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Request to get value', done => {
    request.get(`${uri}/v1/key/France`,{}, (err, response, body) => {
      if(err) return done(err);
      expect(JSON.parse(body).value).to.equal('Paris');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Request to get non existing key value', done => {
    request.get(`${uri}/v1/key/FranceTest`,{}, (err, response, body) => {
      if(err) return done(err);
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('{}');
      done();
    });
  });
});
