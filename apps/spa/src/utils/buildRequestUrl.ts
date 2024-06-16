export const buildRequestUrl = (currencyBase: string, checkingDate: string) => {
    const apiBaseUrl = 'https://api.exchangerate.host/latest';
    const apiCurrencyParam = '?base=';
    const apiCurrencyBase = currencyBase || 'EUR';
    const apiDateParam = checkingDate && '&v=';
    const apiCheckingDate = checkingDate || '';

    const requestUrlElements = [apiBaseUrl, apiCurrencyParam, apiCurrencyBase, apiDateParam, apiCheckingDate];

    return requestUrlElements.join("");
};
