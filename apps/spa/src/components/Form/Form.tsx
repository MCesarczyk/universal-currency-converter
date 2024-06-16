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
import { getCurrentRates } from '../../utils/getCurrentRates';
import { useLocalStorageState } from '../../utils/useLocalStorageState';
import { labelsEnglish, labelsPolish } from '../../features/currencies/labels';
import { LanguageKeys, Languages } from '../../features/languages/types';
import { Rate, RatesData } from '../../features/rates/types';

interface FormProps {
  languages: Languages;
  language: LanguageKeys;
}

export const Form = ({ languages, language }: FormProps) => {
  const CURRENT_CURRENCY_DEFAULT = 'EUR';
  const TARGET_CURRENCY_DEFAULT = 'PLN';
  const LOADING_DELAY = 500;

  const [ratesData, setRatesData] = useState<RatesData | null>(null);
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
  const [checkingDate, setCheckingDate] = useState<string | undefined>();

  const date = ratesData?.date;
  const rates = ratesData?.rates;
  const success = ratesData?.success;

  useEffect(() => {
    newAmount && setCheckingDate(
      newAmount > 0 && date !== undefined
        ? `${languages[language].dateLabel}${date}`
        : ''
    );
  }, [ratesData]); // eslint-disable-line react-hooks/exhaustive-deps

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
  let filteredRates: Record<string, Rate> = {};

  const filterRatesObject = () => {
    if (rates) {
      filteredRates = Object.fromEntries(
        Object.entries(rates).filter(([id]) =>
          Object.keys(currenciesLabels).includes(id)
        )
      );
    }
  };

  filterRatesObject();

  // const getExchangeRate = () => {
  //   if (filteredRates) {
  //     return (
  //       Object.values(filteredRates)[
  //         Object.keys(filteredRates).findIndex((key) => key === currentCurrency)
  //       ] /
  //       Object.values(filteredRates)[
  //         Object.keys(filteredRates).findIndex((key) => key === targetCurrency)
  //       ]
  //     );
  //   }
  // };

  // const currentRate = getExchangeRate();
  const currentRate = 4.25;

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

  const currentDate = new Date(Date.now()).toISOString().substring(0, 10);

  const exchangeMoney = () => {
    getCurrentRates(currentCurrency, currentDate)
      .then((data) => setRatesData(data))
      .then(() => calculateResult());
  };

  useEffect(() => {
    setTimeout(() => {
      exchangeMoney();
    }, LOADING_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAmount, currentCurrency, targetCurrency]);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onFormReset = (event: FormEvent) => {
    event.preventDefault();

    setNewAmount(undefined);
    setResult(undefined);
    setCheckingDate(undefined);
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
              Object.keys(currenciesLabels).map((key, value) => (
                <option key={key} value={key}>
                  {key}
                  {' - '}
                  {
                    Object.values(currenciesLabels)[
                      Object.keys(currenciesLabels).indexOf(key)
                    ]
                  }
                </option>
              ))
            )}
          </Select>
        </ContentWrapper>
      </Fieldset>

      <Fieldset title={languages[language].targetTitle}>
        <ContentWrapper $vertical>
          {success === undefined && (
            <Label text={languages[language].loadingMessage} />
          )}

          {success === false && (
            <Label text={languages[language].errorMessage} />
          )}

          {success === true && (
            <Select
              name="targetCurrency"
              value={targetCurrency}
              onChange={onTargetCurrencyChange}
            >
              {/* {filteredRates &&
                Object.keys(filteredRates).map((key, value) => (
                  <option key={key} value={key}>
                    {(1 / Object.values(filteredRates)[value]).toFixed(4)}
                    {' - '}
                    {key}
                    {' - '}
                    {
                      Object.values(currenciesLabels)[
                        Object.keys(currenciesLabels).indexOf(key)
                      ]
                    }
                  </option>
                ))} */}
            </Select>
          )}
        </ContentWrapper>
      </Fieldset>

      <Fieldset title={languages[language].resultTitle}>
        <TextField>{result}</TextField>
        {checkingDate && <Annotation text={checkingDate} />}
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
