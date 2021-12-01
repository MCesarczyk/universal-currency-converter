import { useEffect, useRef, useState } from "react";
import { getCurrentRates } from "./getCurrentRates";
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
  const [currentCurrency, setCurrentCurrency] = useState('EUR');
  const [ratesData, setRatesData] = useState(null);
  const DEMO_DELAY = 1_000;

  useEffect(() => {
    setTimeout(() => {
      getCurrentRates(currentCurrency)
        .then(data => setRatesData(data))
    }, DEMO_DELAY);
  }, [currentCurrency]);

  const base = ratesData?.base;
  const date = ratesData?.date;
  const rates = ratesData?.rates;
  const success = ratesData?.success;
  const error = ratesData?.error;

  const [wantedCurrency, setWantedCurrency] = useState("USD");
  const [checkingDate, setCheckingDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [result, setResult] = useState([]);

  const inputRef = useRef(null);

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
    setCurrentCurrency("EUR");
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
          <FormSelect name="currentCurrency" value={currentCurrency} onChange={onCurrentCurrencyChange}>
            {!currenciesLabels ?
              <option>
                {languages[language].loadingMessage}
              </option>
              :
              Object.keys(currenciesLabels).map((key, value) => (
                <option key={key} value={key}>
                  {key}
                  {" - "}
                  {Object.values(currenciesLabels)[Object.keys(currenciesLabels).indexOf(key)]}
                </option>
              ))}
          </FormSelect>
        </ContentWrapper>
      </Fieldset>
      <Fieldset>
        <Legend>{listTitle}</Legend>
        <ContentWrapper vertical>
          {success === undefined &&
            <LabelText>
              {languages[language].loadingMessage}
            </LabelText>
          }
          {success === false &&
            <LabelText>
              {languages[language].errorMessage}
            </LabelText>
          }
          {success === true &&
            <ContentWrapper>
              <LabelText>
                {languages[language].wantedCurrencyLabel}
              </LabelText>
              <FormSelect name="wantedCurrency" value={wantedCurrency} onChange={onWantedCurrencyChange}>
                {filteredRates && Object.keys(filteredRates).map((key, value) => (
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
          }
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