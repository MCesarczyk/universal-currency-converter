export const getCurrentRates = async (currencyBase) => {
  const baseURL = 'https://api.exchangerate.host/latest';
  const apiUrl = baseURL + "?base=" + currencyBase || 'EUR';

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error("No response");
    }

    return await response.json();

  } catch (error) {
    console.error(error.message);
  }
};