import { useState } from "react";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus, selectIsIntoPLN } from "../currencySlice"
import { Form, Wrapper, Input, Result, Fieldset, Button, Label, Legend } from "./styled"

export const Calculator = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const isIntoPLN = useSelector(selectIsIntoPLN);

    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState(0);
    const [amountInResult, setAmountInResult] = useState(0);
    const [isIntoPLNInResult, setIsIntoPLNInResult] = useState(isIntoPLN);

    const rate = status === "success" && currency[19].rates[currencyIndex].mid;
    const currencyName = status === "success" && currency[19].rates[currencyIndex].currency;
    const currencyCode = status === "success" && currency[19].rates[currencyIndex].code;

    const onInputChange = ({ target }) => {
        setAmount(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const onButtonClick = () => {
        const result = isIntoPLN
            ? amount * rate
            : amount / rate

        setResult(result);
        setAmountInResult(amount);
        setIsIntoPLNInResult(isIntoPLN);
    };



    return (
        <Wrapper>
            <Form onClick={onFormSubmit}>
                <Fieldset>
                    <Legend>Kalkulator Walut</Legend>
                    <Label>
                        <Input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={amount}
                            onChange={onInputChange}
                        />
                        <Button onClick={onButtonClick}>
                            Oblicz
                        </Button>
                    </Label>
                </Fieldset>
            </Form>
            <Result>
                {amount === 0
                    ? "0.00"
                    : amountInResult}
                &nbsp;{isIntoPLNInResult
                    ? currencyCode
                    : "PLN"}
                &nbsp;to {result.toFixed(2)}
                &nbsp;{!isIntoPLNInResult
                    ? currencyCode
                    : "PLN"}
            </Result>
        </Wrapper>
    )
}