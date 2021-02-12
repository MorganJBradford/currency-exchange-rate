import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './js/exchange-rate-service';

function getExchangeRate(response) {
  if (response.result){
    $('#output').text(`The exchange rate from USD to ${desiredCurrencyCode} is ${response.conversion_rates}.${desiredCurrencyCode}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}