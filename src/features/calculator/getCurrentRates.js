import { buildRequestUrl } from "../../utils/buildRequestUrl";

export const getCurrentRates = async (currencyBase, checkingDate) => {
  const apiUrl = buildRequestUrl(currencyBase, checkingDate);

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error("No response");
    }

    return await response.json();

  } catch (error) {
    console.error(error.message);
    return { success: false };
  }
};