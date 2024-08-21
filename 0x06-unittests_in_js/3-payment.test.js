// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sinon.stub(console, 'log');
    });

    afterEach(() => {
        calculateNumberSpy.restore();
        console.log.restore();
    });

    it('should call Utils.calculateNumber with correct arguments and display the result', () => {
        sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        const result = calculateNumberSpy.returnValues[0];
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith(`The total is: ${result}`)).to.be.true;
    });
});
