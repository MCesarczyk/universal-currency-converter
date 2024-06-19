import { FormEvent, useEffect, useState } from 'react';
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
import { labelsEnglish, labelsPolish } from '../../features/currencies/labels';
import { LanguageKeys, Languages } from '../../features/languages/types';
import { RateDto, RatesData } from '../../features/rates/types';
import { useResult } from './useResult';
import { useCurrency } from './useCurrency';

interface FormProps {
  languages: Languages;
  language: LanguageKeys;
  ratesData: RatesData;
  getCurrentRates: (currencyBase: string) => void;
}

export const Form = ({
  languages,
  language,
  ratesData,
  getCurrentRates,
}: FormProps) => {
  const [newAmount, setNewAmount] = useState<number | undefined>();

  const [shouldFormReset, setShouldFormReset] = useState(false);

  const date = ratesData.rates?.meta.last_updated_at;
  const rates = ratesData.rates?.data;
  const loading = 'loading' in ratesData;
  const error = 'error' in ratesData;

  const currenciesLabels = language === 'PL' ? labelsPolish : labelsEnglish;

  const {
    currentCurrency,
    targetCurrency,
    onCurrentCurrencyChange,
    onTargetCurrencyChange,
    switchValues,
    resetCurrencies,
  } = useCurrency();

  const filteredRates: RateDto[] = rates
    ? Object.values(rates).filter((rate) =>
        Object.keys(currenciesLabels).includes(rate.code)
      )
    : [];

  const { result, resetResult } = useResult(
    filteredRates,
    newAmount,
    currentCurrency,
    targetCurrency
  );

  useEffect(() => {
    getCurrentRates(currentCurrency);
  }, [currentCurrency]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (shouldFormReset) {
      setNewAmount(undefined);
      resetCurrencies();
      resetResult();
      setShouldFormReset(false);
    }
  }, [shouldFormReset]); // eslint-disable-line react-hooks/exhaustive-deps

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onFormReset = () => setShouldFormReset(true);

  return (
    <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset title={languages[language].currentTitle}>
        <ContentWrapper>
          <DebouncedInput
            onChange={(value) => setNewAmount(Number(value))}
            shouldReset={shouldFormReset}
            delay={500}
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
          onMainButtonClick={switchValues}
          onResetButtonClick={onFormReset}
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
