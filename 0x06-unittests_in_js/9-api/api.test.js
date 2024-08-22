const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / should return a successful response', (done) => {
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
});