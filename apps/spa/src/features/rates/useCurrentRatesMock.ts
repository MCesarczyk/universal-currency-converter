import { useState } from "react";
import { RatesData } from "./types";
import { ratesMock } from "./fixtures";

export const useCurrentRatesMock = () => {
  const [ratesData, setRatesData] = useState<RatesData>({
    base: null,
    rates: null,
  });

  const getCurrentRates = async (currencyBase: string) => {
    try {
      const data = ratesMock[currencyBase as keyof typeof ratesMock];

      console.log(data);

      setRatesData({ rates: data, base: currencyBase });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }

      return { success: false };
    }
  }

  return { getCurrentRates, ratesData };
};
