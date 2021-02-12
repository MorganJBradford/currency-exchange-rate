export function checkCurrency(desiredCurrencyCode) {
  let possibleCurrency = ["HTG", "IQD", "KRW", "PHP", "RUB"];
  for (let i = 0; i < possibleCurrency.length; i++){
    if (desiredCurrencyCode === possibleCurrency[i]){
      return desiredCurrencyCode;
    }
  }
}
// if (desiredCurrencyCode === "HTG") {
//   $('#output').append(`<p>The exchange rate from USD is ${inputCurrency * response.conversion_rates.HTG}</p>`);
// } else if (desiredCurrencyCode === "IQD") {
//   $('#output').append(`<p>The exchange rate from USD is ${response.conversion_rates.IQD}</p>`);
// } else if (desiredCurrencyCode === "KRW") {
//   $('#output').append(`<p>The exchange rate from USD is ${response.conversion_rates.KRW}</p>`);
// } else if (desiredCurrencyCode === "PHP") {
//   $('#output').append(`<p>The exchange rate from USD is ${response.conversion_rates.PHP}</p>`);
// } else if (desiredCurrencyCode === "RUB") {
//   $('#output').append(`<p>The exchange rate from USD is ${response.conversion_rates.RUB}</p>`);
// } else {