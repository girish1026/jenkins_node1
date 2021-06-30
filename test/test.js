var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Hey world demo', function(done) {
 //navigate to root and check the the response is "Hey world demo"
 //Small demo
 request(app).get('/').expect('Hey world demo', done);
 });
});