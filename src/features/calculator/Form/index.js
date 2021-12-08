import { useEffect, useState } from "react";
import { getCurrentRates } from "../getCurrentRates";
import Clock from "../../clock/Clock";
import Buttons from "./Buttons";
import { ContentWrapper } from "../../../common/ContentWrapper";
import {
  Fieldset,
  Legend,
  LabelText,
  FormSelect,
  FormAnnotation
} from "./styled";
import { FormInput } from "./FormInput";
import { labelsEnglish, labelsPolish } from "../currenciesLabels";
import { useLocalStorageState } from "../../../utils/useLocalStorageState";

const Form = ({
  languages,
  language,
  headerTitle,
  inputLabel,
  listTitle,
  resultTitle,
  resultLabel
}) => {
  const [ratesData, setRatesData] = useState(null);
  const [newAmount, setNewAmount] = useState("");
  const [currentCurrency, setCurrentCurrency] = useLocalStorageState("currentCurrency", "EUR");
  const [wantedCurrency, setWantedCurrency] = useLocalStorageState("targetCurrency", "USD");
  const [result, setResult] = useState([]);
  const [checkingDate, setCheckingDate] = useState("");

  const DEMO_DELAY = 300;
  const minLength = 0;
  const infinite = false;

  const date = ratesData?.date;
  const rates = ratesData?.rates;
  const success = ratesData?.success;

  const currenciesLabels = language === "PL" ? labelsPolish : labelsEnglish;

  const exchangeMoney = () => {
    getCurrentRates(currentCurrency)
      .then(data => setRatesData(data))
      .then(() => calculateResult())
      .then(
        setCheckingDate(
          newAmount > 0 && date !== undefined
            ? `${languages[language].dateLabel}${date}`
            : ''
        )
      )
  };

  useEffect(() => {
    setTimeout(() => {
      exchangeMoney();
    }, DEMO_DELAY);
  }, [newAmount, currentCurrency, wantedCurrency]);

  const onCurrentCurrencyChange = ({ target }) => {
    setCurrentCurrency(target.value);
  };

  const onWantedCurrencyChange = ({ target }) => {
    setWantedCurrency(target.value);
  };

  let filteredRates = null;

  const filterRatesObject = () => {
    if (rates) {
      filteredRates = Object.fromEntries(Object.entries(rates).filter(
        ([id]) => Object.keys(currenciesLabels).includes(id)));
    };
  };

  filterRatesObject();

  const getExchangeRate = () => {
    if (filteredRates) {
      return (
        Object.values(filteredRates)[Object.keys(filteredRates).findIndex(key => key === currentCurrency)]
        /
        Object.values(filteredRates)[Object.keys(filteredRates).findIndex(key => key === wantedCurrency)]
      );
    }
  };

  const currentRate = getExchangeRate();

  const calculateResult = () => {
    setResult(
      currentRate && newAmount > 0
        ? [(newAmount / currentRate).toFixed(2), " ", wantedCurrency]
        : ""
    );
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult();
    setCheckingDate(`${languages[language].dateLabel}${date}`);
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setNewAmount("");
    setResult("");
    setCheckingDate("");
    setCurrentCurrency("EUR");
    setWantedCurrency("USD");
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
            value={newAmount}
            placeholder={languages[language].inputPlaceholder + currentCurrency}
            type="number"
            min="0.01"
            step="any"
            required
            autoFocus
            onChange={({ target }) => setNewAmount(target.value)}
            minLength={minLength}
            debounceTimeout={infinite ? -1 : DEMO_DELAY}
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