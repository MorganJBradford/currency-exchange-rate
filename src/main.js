import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service.js';


function outputExchangeRate(response, desiredCurrencyCode, inputCurrency) {
  console.log(inputCurrency);
  if (response.conversion_rates[desiredCurrencyCode] === undefined) {
    $('.show-errors').text(`Sorry, but "${response.conversion_rates[desiredCurrencyCode]}" is not a valid currency`);
    return;
  } else if (isNaN(inputCurrency)) {
    $('.show-errors').text(`Please enter a number:`);
  } else if (response.result) {
    $('#output').append(`<p>The exchange rate for $${inputCurrency} to ${desiredCurrencyCode} is ${inputCurrency * response.conversion_rates[desiredCurrencyCode]} ${desiredCurrencyCode}</p>`);  
  } else {
    $('.show-errors').text(`There was an error: ${response}`);
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
