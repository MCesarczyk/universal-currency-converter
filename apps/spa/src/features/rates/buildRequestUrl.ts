export const buildRequestUrl = (currencyBase: string) => {
    const apiBaseUrl = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_LtMsWwNo2NBhu0Zw47ETWqKQ1eUMyaYNR9oHZeba';
    const apiCurrencyParam = '&base_currency=';
    const apiCurrencyBase = currencyBase || 'USD';

    const requestUrlElements = [apiBaseUrl, apiCurrencyParam, apiCurrencyBase];

    return requestUrlElements.join("");
};
