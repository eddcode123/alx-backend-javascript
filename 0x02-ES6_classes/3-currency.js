export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw new Error('Code must be a sting');
    }
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  // create getters and setters for each attribute
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof (newCode) !== 'string') {
      throw new Error('Code must be a sting');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  // method that will return the attributes in the following format name (code)
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
