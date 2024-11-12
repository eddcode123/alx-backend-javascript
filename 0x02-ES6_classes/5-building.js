export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(mySqft) {
    if (typeof (mySqft) !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = mySqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
