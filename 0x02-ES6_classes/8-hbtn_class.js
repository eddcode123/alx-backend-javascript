export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  // getters and setters
  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') throw new Error();
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') throw new Error();
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    if (hint === 'number') {
      return this.size;
    }
    return this;
  }
}
