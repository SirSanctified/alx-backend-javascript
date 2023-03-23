/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Abstract classes can\'t be instantiated');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = this.sqft;
    } else {
      throw new TypeError('Sqrft must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
