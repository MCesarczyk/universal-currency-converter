import { useEffect, useState } from "react";

export const useCurrentRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    base: "EUR",
    date: null,
    rates: null
  });

  const requestURL = 'https://api.exchangerate.host/latest';

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await fetch(requestURL);

        if (!response.ok) {
          throw new Error("No response");
        }

        const { base, date, rates } = await response.json();

        if (!rates) {
          throw new Error("No rates data");
        }

        if (base !== ratesData.base) {
          throw new Error(`Wrong currency base: ${base}`);
        }

        setRatesData({
          status: "success",
          base: base,
          date: date,
          rates: rates
        });

      } catch (error) {
        setRatesData({ status: "error" });
        console.log(error.message);
      }
    };

    setTimeout(getRates, 1_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ratesData;
};