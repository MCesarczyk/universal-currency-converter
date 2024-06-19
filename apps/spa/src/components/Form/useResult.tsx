import { useEffect, useState } from 'react';
import { RateDto } from '../../features/rates/types';

export const useResult = (
  filteredRates: RateDto[],
  newAmount: number | undefined,
  currentCurrency: string,
  targetCurrency: string
) => {
  const [result, setResult] = useState<string | undefined>();

  const getExchangeRate = () => {
    if (filteredRates) {
      const currentRate = filteredRates.find(
        ({ code }) => code === currentCurrency
      );
      const targetRate = filteredRates.find(
        ({ code }) => code === targetCurrency
      );

      if (currentRate && targetRate) {
        return currentRate.value / targetRate.value;
      }
    }
  };

  const currentRate = getExchangeRate();

  const calculateResult = () => {
    if (!currentRate || !newAmount) {
      setResult(undefined);
      return;
    }

    setResult(
      currentRate && newAmount > 0
        ? `${(newAmount / currentRate).toFixed(2)} ${targetCurrency}`
        : undefined
    );
  };

  useEffect(() => {
    if (!newAmount) return;

    calculateResult();
  }, [newAmount, currentCurrency, targetCurrency]); // eslint-disable-line react-hooks/exhaustive-deps

  const resetResult = () => setResult(undefined);

  return { result, resetResult };
};
