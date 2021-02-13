import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service.js';

function clearFields() {
  $('.show-errors').text('');
  $('#output').text('');
  $('.number-errors').text('');
}

function outputExchangeRate(response, desiredCurrencyCode, inputCurrency, inputCurrencyCode) {
  if (response.conversion_rates[desiredCurrencyCode] === undefined) {
    $('.show-errors').text(`Sorry, but "${response.conversion_rates[desiredCurrencyCode]}" is not a valid currency`);
    return;
  } else if (isNaN(inputCurrency)) {
    $('.number-errors').text(`Please enter a number above.`);
  } else if (inputCurrency < 0) {
    $('.number-errors').text(`Please enter a positive number above, silly.`);
  } else if (response.result) {
    $('#output').append(`<p>${inputCurrency} ${inputCurrencyCode} is the equivalent of ${inputCurrency * response.conversion_rates[desiredCurrencyCode]} ${desiredCurrencyCode}</p>`);  
  } else {
    $('.show-errors').text(`There was an error: ${response}`);
  }
}


async function exchangeApiCall(inputCurrencyCode, desiredCurrencyCode, inputCurrency) {
  const response = await ExchangeRateService.getCurrencyRate(inputCurrencyCode);
  outputExchangeRate(response, desiredCurrencyCode, inputCurrency, inputCurrencyCode);
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
