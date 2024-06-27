export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    get size() {
        return this._size;
      }
    
      get location() {
        return this._location;
      }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
          return this.size;
        }
        if (hint === 'string') {
          return this.location;
        }
        return this;
      }
}