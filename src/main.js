import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service';

function outputExchangeRate(response) {
  if (response.result){
    $('#output').text(`The exchange rate from USD is ${response.conversion_rates.desiredCurrencyCode}`);
  } else {
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

async function exchangeApiCall(desiredCurrencyCode) {
  const response = await ExchangeRateService.getCurrencyRate(desiredCurrencyCode);
  outputExchangeRate(response);
}

$(document).ready(function(){
  $('#rate-checker').click(function(){
    let desiredCurrencyCode = $('#desired-currency').val();
    console.log(desiredCurrencyCode);
    exchangeApiCall(desiredCurrencyCode);
  });
});
