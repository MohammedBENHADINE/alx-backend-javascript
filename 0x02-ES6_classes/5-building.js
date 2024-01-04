/* eslint-disable class-methods-use-this */
export default class Building {
  /* eslint-disable no-underscore-dangle */
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
