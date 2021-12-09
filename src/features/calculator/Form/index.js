import { useEffect, useState } from "react";
import { getCurrentRates } from "../getCurrentRates";
import Buttons from "./Buttons";
import { ContentWrapper } from "../../../common/ContentWrapper";
import Fieldset from "../../../common/Fieldset";
import Label from "../../../common/Label";
import Annotation from "../../../common/Annotation";
import { Select } from "../../../common/Select";
import { Input } from "./Input";
import { labelsEnglish, labelsPolish } from "../currenciesLabels";
import { useLocalStorageState } from "../../../utils/useLocalStorageState";
import { TextField } from "../../../common/TextField";

const Form = ({
  languages,
  language,
  currentTitle,
  targetTitle,
  resultTitle,
  dateLabel
}) => {
  const CURRENT_CURRENCY_DEFAULT = "EUR";
  const TARGET_CURRENCY_DEFAULT = "PLN";
  const LOADING_DELAY = 500;

  const [ratesData, setRatesData] = useState(null);
  const [newAmount, setNewAmount] = useState("");
  const [currentCurrency, setCurrentCurrency] = useLocalStorageState("currentCurrency", CURRENT_CURRENCY_DEFAULT);
  const [targetCurrency, setTargetCurrency] = useLocalStorageState("targetCurrency", TARGET_CURRENCY_DEFAULT);
  const [result, setResult] = useState([]);
  const [checkingDate, setCheckingDate] = useState("");

  const date = ratesData?.date;
  const rates = ratesData?.rates;
  const success = ratesData?.success;

  const currenciesLabels = language === "PL" ? labelsPolish : labelsEnglish;

  const onCurrentCurrencyChange = ({ target }) => {
    setCurrentCurrency(target.value);
  };

  const onTargetCurrencyChange = ({ target }) => {
    setTargetCurrency(target.value);
  };

  const switchValues = () => {
    const oldCurrent = currentCurrency;
    const oldTarget = targetCurrency;

    setCurrentCurrency(oldTarget);
    setTargetCurrency(oldCurrent);
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
        Object.values(filteredRates)[Object.keys(filteredRates).findIndex(key => key === targetCurrency)]
      );
    }
  };

  const currentRate = getExchangeRate();

  const calculateResult = () => {
    setResult(
      currentRate && newAmount > 0
        ? [(newAmount / currentRate).toFixed(2), " ", targetCurrency]
        : ""
    );
  };

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
    }, LOADING_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newAmount, currentCurrency, targetCurrency]);

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
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset
        title={currentTitle}
      >
        <ContentWrapper>
          <Input
            value={newAmount}
            placeholder={languages[language].inputPlaceholder + currentCurrency}
            type="number"
            min="0.01"
            step="any"
            required
            autoFocus
            onChange={({ target }) => setNewAmount(target.value)}
            minLength={0}
            debounceTimeout={LOADING_DELAY}
          />
          <Select name="currentCurrency" value={currentCurrency} onChange={onCurrentCurrencyChange}>
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
          </Select>
        </ContentWrapper>
      </Fieldset>

      <Fieldset
        title={targetTitle}
      >
        <ContentWrapper vertical>

          {success === undefined &&
            <Label text={languages[language].loadingMessage} />
          }

          {success === false &&
            <Label text={languages[language].errorMessage} />
          }

          {success === true &&
            <Select name="targetCurrency" value={targetCurrency} onChange={onTargetCurrencyChange}>
              {filteredRates && Object.keys(filteredRates).map((key, value) => (
                <option key={key} value={key}>
                  {(1 / (Object.values(filteredRates)[value])).toFixed(4)}
                  {" - "}
                  {key}
                  {" - "}
                  {Object.values(currenciesLabels)[Object.keys(currenciesLabels).indexOf(key)]}
                </option>
              ))}
            </Select>
          }

        </ContentWrapper>
      </Fieldset>

      <Fieldset
        title={resultTitle}
      >
        <TextField>
          {result}
        </TextField>
        <Annotation text={checkingDate} />
        <Buttons
          languages={languages}
          language={language}
          onButtonClick={switchValues}
        />
      </Fieldset>
    </form>
  )
}

export default Form;