import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service.js';

function clearFields() {
  $('.show-errors').text('');
  $('#output').text('');
  
}

function outputExchangeRate(response, desiredCurrencyCode, inputCurrency) {
  if (response.conversion_rates[desiredCurrencyCode] === undefined) {
    $('.show-errors').text(`Sorry, but "${response.conversion_rates[desiredCurrencyCode]}" is not a valid currency`);
    return;
  } else if (isNaN(inputCurrency)) {
    $('.show-errors').text(`Please enter a number:`);
  } else if (response.result) {
    $('#output').append(`<p>The exchange rate for ${inputCurrency} is ${inputCurrency * response.conversion_rates[desiredCurrencyCode]} ${desiredCurrencyCode}</p>`);  
  } else {
    $('.show-errors').text(`There was an error: ${response}`);
  }
}


async function exchangeApiCall(inputCurrencyCode, desiredCurrencyCode, inputCurrency) {
  const response = await ExchangeRateService.getCurrencyRate(inputCurrencyCode);
  outputExchangeRate(response, desiredCurrencyCode, inputCurrency);
}

$(document).ready(function(){
  $('#rate-checker').click(function(){
    clearFields();
    let inputCurrencyCode = $('#convert-from').val();
    let inputCurrency = parseFloat($('#currency-to-convert').val());
    let desiredCurrencyCode = $('#desired-currency').val();
    exchangeApiCall(inputCurrencyCode, desiredCurrencyCode, inputCurrency);
  });
});
