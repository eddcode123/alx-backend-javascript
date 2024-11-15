export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' || typeof motor !== 'string' || typeof color !== 'string') {
      throw new Error();
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  //  method returns a new object of the class
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
