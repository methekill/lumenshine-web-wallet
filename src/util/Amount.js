import { BigNumber } from 'bignumber.js';
BigNumber.set({ DECIMAL_PLACES: 7 });
BigNumber.config({ FORMAT: {
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0
}});

class Amount {
  constructor (val) {
    if (!(val instanceof Amount || typeof val === 'string')) {
      throw new Error('Amount should be string');
    }
    if (val instanceof Amount) {
      this.val = BigNumber(val.val);
    } else {
      this.val = BigNumber(val);
    }
  }

  plus (newVal) {
    if (!(newVal instanceof Amount || typeof newVal === 'string')) {
      throw new Error('Amount should be string');
    }
    if (newVal instanceof Amount) {
      this.val = this.val.plus(newVal.val);
    } else {
      this.val = this.val.plus(newVal);
    }
    return this;
  }

  minus (newVal) {
    if (!(newVal instanceof Amount || typeof newVal === 'string')) {
      throw new Error('Amount should be string');
    }
    if (newVal instanceof Amount) {
      this.val = this.val.minus(newVal.val);
    } else {
      this.val = this.val.minus(newVal);
    }
    return this;
  }

  multiply (newVal) {
    if (!(newVal instanceof Amount || typeof newVal === 'string')) {
      throw new Error('Amount should be string');
    }
    if (newVal instanceof Amount) {
      this.val = this.val.times(newVal.val);
    } else {
      this.val = this.val.times(newVal);
    }
    return this;
  }

  divide (newVal) {
    if (!(newVal instanceof Amount || typeof newVal === 'string')) {
      throw new Error('Amount should be string');
    }
    if (newVal instanceof Amount) {
      this.val = this.val.div(newVal.val);
    } else {
      this.val = this.val.div(newVal);
    }
    return this;
  }

  format (decimalPlaces = 7) {
    return this.val.toFormat(decimalPlaces);
  }

  toNumber () {
    return this.val.toNumber();
  }

  toFixed (x) {
    return this.val.toFixed(x);
  }

  equal (x) {
    if (!(x instanceof Amount || typeof x === 'string')) {
      throw new Error('Amount should be string');
    }
    if (x instanceof Amount) {
      return this.val.eq(x.val);
    } else {
      return this.val.eq(x);
    }
  }
};

export default Amount;
