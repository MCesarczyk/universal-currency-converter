import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Annotation,
  ContentWrapper,
  DebouncedInput,
  Fieldset,
  FormButtons,
  Label,
  Select,
  TextField,
} from '@ui';
import { useCurrentRatesMock } from '../../features/rates/useCurrentRatesMock';
import { useLocalStorageState } from '../../utils/useLocalStorageState';
import { labelsEnglish, labelsPolish } from '../../features/currencies/labels';
import { LanguageKeys, Languages } from '../../features/languages/types';
import { RateDto } from '../../features/rates/types';

interface FormProps {
  languages: Languages;
  language: LanguageKeys;
}

export const Form = ({ languages, language }: FormProps) => {
  const CURRENT_CURRENCY_DEFAULT = 'EUR';
  const TARGET_CURRENCY_DEFAULT = 'PLN';
  const LOADING_DELAY = 500;

  const [newAmount, setNewAmount] = useState<number | undefined>();

  const [currentCurrency, setCurrentCurrency] = useLocalStorageState(
    'currentCurrency',
    CURRENT_CURRENCY_DEFAULT
  );

  const [targetCurrency, setTargetCurrency] = useLocalStorageState(
    'targetCurrency',
    TARGET_CURRENCY_DEFAULT
  );

  const [result, setResult] = useState<[string, string, string] | undefined>();

  const { getCurrentRates, ratesData } = useCurrentRatesMock();

  useEffect(() => {
    getCurrentRates(currentCurrency);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const date = ratesData.rates?.meta.last_updated_at;
  const rates = ratesData.rates?.data;
  const loading = 'loading' in ratesData;
  const error = 'error' in ratesData;

  const currenciesLabels = language === 'PL' ? labelsPolish : labelsEnglish;

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredRates: RateDto[] = rates
    ? Object.values(rates).filter((rate) =>
        Object.keys(currenciesLabels).includes(rate.code)
      )
    : [];

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
        ? [(newAmount / currentRate).toFixed(2), ' ', targetCurrency]
        : undefined
    );
  };

  useEffect(() => {
    calculateResult();
  }, [newAmount, rates, currentCurrency, targetCurrency]); // eslint-disable-line react-hooks/exhaustive-deps

  const exchangeMoney = () => {
    getCurrentRates(currentCurrency);
  };

  useEffect(() => {
    setTimeout(() => {
      exchangeMoney();
    }, LOADING_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAmount, currentCurrency, targetCurrency, newAmount]);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onFormReset = (event: FormEvent) => {
    event.preventDefault();

    setNewAmount(undefined);
    setResult(undefined);
  };

  return (
    <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset title={languages[language].currentTitle}>
        <ContentWrapper>
          <DebouncedInput
            onChange={(value) => setNewAmount(Number(value))}
            delay={LOADING_DELAY}
            placeholder={languages[language].inputPlaceholder + currentCurrency}
            type="number"
            min="0.01"
            step="any"
            minLength={0}
          />
          <Select
            name="currentCurrency"
            value={currentCurrency}
            onChange={onCurrentCurrencyChange}
          >
            {!currenciesLabels ? (
              <option>{languages[language].loadingMessage}</option>
            ) : (
              rates &&
              Object.entries(currenciesLabels)
                .filter((entry) => Object.keys(rates).includes(entry[0]))
                .map(([key, value]) => (
                  <option key={key} value={key}>
                    {`${key} - ${value}`}
                  </option>
                ))
            )}
          </Select>
        </ContentWrapper>
      </Fieldset>

      <Fieldset title={languages[language].targetTitle}>
        <ContentWrapper $vertical>
          {loading && <Label text={languages[language].loadingMessage} />}

          {error && <Label text={languages[language].errorMessage} />}

          {rates && (
            <Select
              name="targetCurrency"
              value={targetCurrency}
              onChange={onTargetCurrencyChange}
            >
              {filteredRates &&
                filteredRates.map(({ code, value }) => (
                  <option key={code} value={code}>
                    {`${(1 / value).toFixed(4)} - ${code} - ${
                      Object.values(currenciesLabels)[
                        Object.keys(currenciesLabels).indexOf(code)
                      ]
                    }`}
                  </option>
                ))}
            </Select>
          )}
        </ContentWrapper>
      </Fieldset>

      <Fieldset title={languages[language].resultTitle}>
        <TextField>{result}</TextField>
        {date && result && (
          <Annotation text={new Date(date).toLocaleDateString(language)} />
        )}
        <FormButtons
          mainButtonLabel={languages[language].mainButtonLabel}
          resetButtonLabel={languages[language].resetButtonLabel}
          onButtonClick={switchValues}
        />
      </Fieldset>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: auto;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.innerContainerBackground};
  width: ${({ theme }) => theme.breakpoint.md};

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 12px;
  }
`;
