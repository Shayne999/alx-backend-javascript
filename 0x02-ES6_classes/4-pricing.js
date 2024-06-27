import {Currency} from './3-currency.js';

export default class Pricing {
    constructor (amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // amount getters and setters
    get amount() {
        return this._amount;
    }

    set amount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError ('Amount must be a number');
        }
        this._amount = amount;
    }


    // currency getters and setters
    get currency() {
        return this.currency;
    }

    set currency(currency) {
        if (!(this.currency == instanceofCurrency)) {
            throw new TypeError ('Currency must be an instance of Currency');
        }
        this._currency = currency;
    }


    displayFullPrice() {
        return `${this._amount} ${this.currency.name} (${this.currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError ('Amount must be a number');
        }

        if (typeof conversionRate !== 'number') {
            throw new TypeError ('Conversion rate must be a number');
        }
        return amount * conversionRate;
    }

}