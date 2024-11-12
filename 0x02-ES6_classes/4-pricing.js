import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of the Currency class');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // create getters and setters for attributes
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(myAmount) {
    if (typeof (myAmount) !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = myAmount;
  }

  set currency(myCurrency) {
    if (!(myCurrency instanceof Currency)) {
      throw new Error('Currency must be an instance of the Currency class');
    }
    this._currency = myCurrency;
  }

  // <displayFullPrice> returns the attributes in the format amount currency_name (currency_code)
  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  // static method <convertPrice> returns the amount multiplied by the conversion rate.
  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof (conversionRate) !== 'number') {
      throw new Error('Conversion rate  must be a number');
    }
    return amount * conversionRate;
  }
}
