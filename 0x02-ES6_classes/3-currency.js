export default class Currency {
    constructor (code, name) {
        this._code = code;
        this._name = name;
    }

    // code getters and setters
    get code() {
        return this._code;
    }
    set code(code) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = code;
    }


    // name getters and setters
    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }


    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}