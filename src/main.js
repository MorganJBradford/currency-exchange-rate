import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service.js';


function outputExchangeRate(response, desiredCurrencyCode, inputCurrency) {
  if (response.result){
    if (desiredCurrencyCode === "HTG") {
      $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates.HTG} ${desiredCurrencyCode}</p>`);
    } else if (desiredCurrencyCode === "IQD") {
      $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates.IQD}</p>`);
    } else if (desiredCurrencyCode === "KRW") {
      $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates.KRW}</p>`);
    } else if (desiredCurrencyCode === "PHP") {
      $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates.PHP}</p>`);
    } else if (desiredCurrencyCode === "RUB") {
      $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates.RUB}</p>`);
    } else if (desiredCurrencyCode !== "HTG" || desiredCurrencyCode !== "IQD" || desiredCurrencyCode !== "KRW" || desiredCurrencyCode !== "PHP" || desiredCurrencyCode !== "RUB") {
      return new Error('Currency not available.');
    } else {
      $('#showErrors').text(`There was an error: ${response}`);
    }
  }
}

async function exchangeApiCall(desiredCurrencyCode, inputCurrency) {
  const response = await ExchangeRateService.getCurrencyRate();
  outputExchangeRate(response, desiredCurrencyCode, inputCurrency);
}

$(document).ready(function(){
  $('#rate-checker').click(function(){
    let inputCurrency = parseFloat($('#currency-to-convert').val());
    let desiredCurrencyCode = $('#desired-currency').val();
    exchangeApiCall(desiredCurrencyCode, inputCurrency);
  });
});
