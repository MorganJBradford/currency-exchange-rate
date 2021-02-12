import {checkCurrency} from '../src/js/exchanger'

describe('checkCurrency', ()=> {

  test('should correctly determine the string set to desiredCurrency variable', ()=> {
    let desiredCurrencyCode = "PHP";
    expect(checkCurrency(desiredCurrencyCode)).toEqual("PHP");
  });
});