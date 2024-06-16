import { buildRequestUrl } from "./buildRequestUrl";

export const getCurrentRates = async (currencyBase: string, checkingDate: string) => {
  const apiUrl = buildRequestUrl(currencyBase, checkingDate);

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });

    if (!response.ok) {
      throw new Error("No response");
    }

    return await response.json();

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return { success: false };
  }
};
