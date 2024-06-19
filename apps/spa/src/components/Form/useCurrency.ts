import { ChangeEvent } from "react";
import { useLocalStorageState } from "../../utils/useLocalStorageState";


export const useCurrency = () => {
  const CURRENT_CURRENCY_DEFAULT = 'EUR';
  const TARGET_CURRENCY_DEFAULT = 'PLN';

  const [currentCurrency, setCurrentCurrency] = useLocalStorageState(
    'currentCurrency',
    CURRENT_CURRENCY_DEFAULT
  );

  const [targetCurrency, setTargetCurrency] = useLocalStorageState(
    'targetCurrency',
    TARGET_CURRENCY_DEFAULT
  );

  const onCurrentCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentCurrency(event.target.value);
  };

  const onTargetCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTargetCurrency(event.target.value);
  };

  const switchValues = () => {
    const oldCurrent = currentCurrency;
    const oldTarget = targetCurrency;

    setCurrentCurrency(oldTarget);
    setTargetCurrency(oldCurrent);
  };

  const resetCurrencies = () => {
    setCurrentCurrency(CURRENT_CURRENCY_DEFAULT);
    setTargetCurrency(TARGET_CURRENCY_DEFAULT);
  }

  return { currentCurrency, targetCurrency, onCurrentCurrencyChange, onTargetCurrencyChange, switchValues, resetCurrencies }
};
