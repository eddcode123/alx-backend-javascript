import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof (sqft) !== 'number') throw new Error('Sqft must be a number');
    if (typeof (floors) !== 'number') throw new Error('Floors must be a number');
    super(sqft);
    this._floors = floors;
  }

  // implement getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // eslint-disable-next-line class-methods-use-this
  // overide the superclass method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
