const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('Get / should return a successful response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id should return a successful response for valid id', (done) => {
        request.get(`${API_URL}/cart/12`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 12');
            done();
        });
    });

    it('GET /cart/:id should return a 404 response for negative id number', (done) => {
        request.get(`${API_URL}/cart/-12`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id should return a 404 response for non numeric id', (done) => {
        request.get(`${API_URL}/cart/non-numeric`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('POST /login should return a valid response', (done) => {
        request.post(`${API_URL}/login`, {json: {userName: 'test'}}, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome test');
            done();
        });
    });

    it('GET /available_payments should return a valid response', (done) => {
        request.post(`${API_URL}/available_payments`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body)).to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
            done();
        });
    });
});