export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new Error();
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // getters and setters
  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value !== 'string') throw new Error();
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') throw new Error();
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') throw new Error();
    this._color = value;
  }

  //  method returns a new object of the class
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
