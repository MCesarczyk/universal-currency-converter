import { useState } from "react";
import { buildRequestUrl } from "./buildRequestUrl";
import { RatesData } from "./types";

export const useCurrentRates = () => {
  const [ratesData, setRatesData] = useState<RatesData>({
    base: null,
    rates: null,
  });

  const getCurrentRates = async (currencyBase: string) => {
    const apiUrl = buildRequestUrl(currencyBase);

    try {
      const response = await fetch(apiUrl, { mode: 'cors' });

      if (!response.ok) {
        throw new Error("No response");
      }

      const data = await response.json();

      setRatesData({ rates: data, base: currencyBase });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }

      return { success: false };
    }

    return ratesData;
  }

  return { getCurrentRates, ratesData };
};
