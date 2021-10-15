import { useRef, useState } from "react";
import { useCurrentRates } from "./useCurrentRates";
import Clock from "./Clock";
import Buttons from "./Buttons";
import currencies from "./currencies";

import {
  Fieldset,
  Legend,
  InputLabel,
  InputLabelText,
  FormInput,
  FormSelect,
  FormResult,
  FormAnnotation
} from "./styled";

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
  const [checkingDate, setCheckingDate] = useState("");
  const [chosenCurrency, setChosenCurrency] = useState("EUR");
  const [newAmount, setNewAmount] = useState("");
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const onCurrencyChange = ({ target }) => {
    setChosenCurrency(target.value);
  };

  const getExchangeRate = () => {
    return currencies.find(({ id }) => id === chosenCurrency).rate;
  };

  const calculateResult = () => {
    setResult([(newAmount / getExchangeRate()).toFixed(2), " ", chosenCurrency]);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    getExchangeRate();
    calculateResult();
    setNewAmount("");
    setCheckingDate(`${languages[language].dateLabel}${date}`);
    inputRef.current.focus();
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setNewAmount("");
    setResult("");
    setCheckingDate("");
    setChosenCurrency("EUR");
    inputRef.current.focus();
  };

  let filteredRates = null;

  const filterRatesObject = () => {
    if (rates) {
      const wantedCurrencies = currencies.map(({ id }) => id);
      filteredRates = Object.fromEntries(Object.entries(rates).filter(
        ([id]) => wantedCurrencies.includes(id)));
    };
  };

  filterRatesObject();

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend>{headerTitle}</Legend>
        <Clock
          languages={languages}
          language={language}
        />
        <InputLabel>
          <InputLabelText>
            {inputLabel}
          </InputLabelText>
          <FormInput
            ref={inputRef}
            value={newAmount}
            placeholder={languages[language].inputPlaceholder}
            type="number"
            min="0.01"
            step="any"
            required
            autoFocus
            onChange={({ target }) => setNewAmount(target.value)}
          />
        </InputLabel>
      </Fieldset>
      <Fieldset>
        <Legend>{listTitle}</Legend>
        <InputLabel>
          {status === "loading" ? (
            <div>
              {languages[language].loadingMessage}
            </div>
          ) : (status === "error" ? (
            <div>
              {languages[language].errorMessage}
            </div>
          ) : (
            <FormSelect onChange={onCurrencyChange}>
              {Object.keys(filteredRates).map((key, value) => (
                <option key={key} value={key}>
                  {(1 / (Object.values(filteredRates)[value])).toFixed(4)}
                  {" - "}
                  {key}
                  {" - "}
                  {currencies[currencies.findIndex(({ id }) => id === key)].label[language]}
                </option>
              ))}
            </FormSelect>
          ))}
        </InputLabel>
      </Fieldset>
      <Fieldset>
        <Legend>{resultTitle}</Legend>
        <FormResult>
          {resultLabel}
          {result}
        </FormResult>
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