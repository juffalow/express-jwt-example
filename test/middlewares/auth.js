var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var auth = require('../../middlewares/auth.js');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');

describe('Test Auth Middleware', function(){
    var request;
    var response;
    var next;

    beforeEach(function() {
        request = {};
        response = {
            status: sinon.stub().returnsThis(),
            json: sinon.spy()
        };
        next = sinon.spy();
    });

    it('next should not be called if no token provided', function() {
        auth(request, response, next);
        expect(next.called).to.equal(false);
    });

    it('should return 401 status code if no token provided', function() {
        auth(request, response, next);
        expect(response.status.getCall(0).args[0]).to.equal(401);
    });

    it('next should not be called if bad token was provided', function() {
        request.headers = {};
        request.headers.authorization = 'some authorization header';
        auth(request, response, next);
        expect(next.called).to.equal(false);
    });

    it('shoudl return 401 status code if bad token was provided', function() {
        request.headers = {};
        request.headers.authorization = 'some authorization header';
        auth(request, response, next);
        expect(response.status.getCall(0).args[0]).to.equal(401);
    });

    it('next should be called once if good token was provided', function() {
        request.headers = {};
        request.headers.authorization = jwt.sign({ id: 1 }, config.JWT_SECRET);
        auth(request, response, next);
        expect(next.calledOnce).to.equal(true);
    });
});
