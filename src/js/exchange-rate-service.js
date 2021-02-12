export default class ExchangeRateService {
  static async getCurrencyRate(inputCurrencyCode){
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${inputCurrencyCode}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}