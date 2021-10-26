import { useEffect, useRef, useState } from "react";
import { useCurrentRates } from "./useCurrentRates";
import Clock from "./Clock";
import Buttons from "./Buttons";
import { ContentWrapper } from "../../common/ContentWrapper";
import {
  Fieldset,
  Legend,
  LabelText,
  FormInput,
  FormSelect,
  FormAnnotation
} from "./styled";
import { labelsEnglish, labelsPolish } from "./currenciesLabels";

const Form = ({
  languages,
  language,
  headerTitle,
  inputLabel,
  listTitle,
  resultTitle,
  resultLabel
}) => {
  const ratesData = useCurrentRates();
  const status = ratesData.status;
  const date = ratesData.date;
  const rates = ratesData.rates;
  const inputRef = useRef(null);

  const [checkingDate, setCheckingDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState("EUR");
  const [wantedCurrency, setWantedCurrency] = useState("USD");
  const [result, setResult] = useState([]);

  const onCurrentCurrencyChange = ({ target }) => {
    setCurrentCurrency(target.value);
  };

  const onWantedCurrencyChange = ({ target }) => {
    setWantedCurrency(target.value);
  };

  const currenciesLabels = language === "PL" ? labelsPolish : labelsEnglish;

  let filteredRates = null;

  const filterRatesObject = () => {
    if (rates) {
      filteredRates = Object.fromEntries(Object.entries(rates).filter(
        ([id]) => Object.keys(currenciesLabels).includes(id)));
    };
  };

  filterRatesObject();

  useEffect(() => {
    console.log(`Exchange: ${currentCurrency}/${wantedCurrency}`);
  }, [currentCurrency, wantedCurrency]);

  const getExchangeRate = () => {
    if (filteredRates) {
      return (
        Object.values(filteredRates)[Object.keys(filteredRates).findIndex(key => key === currentCurrency)]
        /
        Object.values(filteredRates)[Object.keys(filteredRates).findIndex(key => key === wantedCurrency)]
      );
    }
  };

  const calculateResult = () => {
    setResult([(newAmount / getExchangeRate()).toFixed(2), " ", wantedCurrency]);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult();
    setCheckingDate(`${languages[language].dateLabel}${date}`);
    inputRef.current.focus();
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setNewAmount("");
    setResult("");
    setCheckingDate("");
    setWantedCurrency("USD");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend>{headerTitle}</Legend>
        <Clock
          languages={languages}
          language={language}
        />
        <ContentWrapper>
          <LabelText>
            {inputLabel}
          </LabelText>
          <FormInput
            ref={inputRef}
            value={newAmount}
            placeholder={languages[language].inputPlaceholder + currentCurrency}
            type="number"
            min="0.01"
            step="any"
            required
            autoFocus
            onChange={({ target }) => setNewAmount(target.value)}
          />
        </ContentWrapper>
      </Fieldset>
      <Fieldset>
        <Legend>{listTitle}</Legend>
        <ContentWrapper vertical>
          {status === "loading" ? (
            <LabelText>
              {languages[language].loadingMessage}
            </LabelText>
          ) : (status === "error" ? (
            <LabelText>
              {languages[language].errorMessage}
            </LabelText>
          ) : (
            <>
              <ContentWrapper>
                <LabelText>
                  Current&nbsp;currency:
                </LabelText>
                <FormSelect name="currentCurrency" value={currentCurrency} onChange={onCurrentCurrencyChange}>
                  {Object.keys(filteredRates).map((key, value) => (
                    <option key={key} value={key}>
                      {(1 / (Object.values(filteredRates)[value])).toFixed(4)}
                      {" - "}
                      {key}
                      {" - "}
                      {Object.values(currenciesLabels)[Object.keys(currenciesLabels).indexOf(key)]}
                    </option>
                  ))}
                </FormSelect>
              </ContentWrapper>
              <ContentWrapper>
                <LabelText>
                  Wanted&nbsp;currency:
                </LabelText>
                <FormSelect name="wantedCurrency" value={wantedCurrency} onChange={onWantedCurrencyChange}>
                  {Object.keys(filteredRates).map((key, value) => (
                    <option key={key} value={key}>
                      {(1 / (Object.values(filteredRates)[value])).toFixed(4)}
                      {" - "}
                      {key}
                      {" - "}
                      {Object.values(currenciesLabels)[Object.keys(currenciesLabels).indexOf(key)]}
                    </option>
                  ))}
                </FormSelect>
              </ContentWrapper>
            </>
          ))}
        </ContentWrapper>
      </Fieldset>
      <Fieldset>
        <Legend>{resultTitle}</Legend>
        <ContentWrapper>
          <LabelText>
            {resultLabel}
          </LabelText>
          <div>
            {result}
          </div>
        </ContentWrapper>
        <FormAnnotation>
          {checkingDate}
        </FormAnnotation>
        <Buttons
          languages={languages}
          language={language}
        />
      </Fieldset>
    </form>
  )
}

export default Form;