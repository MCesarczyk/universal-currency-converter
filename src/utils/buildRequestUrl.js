export const buildRequestUrl = (currencyBase, checkingDate) => {
    const apiBaseUrl = 'https://api.exchangerate.host/latest';
    const apiCurrencyParam = '?base=';
    const apiCurrencyBase = currencyBase || 'EUR';
    const apiDateParam = checkingDate && '&v=';
    const apiCheckingDate = checkingDate || '';

    const requestUrlElements = [apiBaseUrl, apiCurrencyParam, apiCurrencyBase, apiDateParam, apiCheckingDate];

    return requestUrlElements.join("");
};