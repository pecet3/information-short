import { useState } from "react";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus } from "../currencySlice"
import { Form, Wrapper, Input, Result, Fieldset, Button, Label, Legend } from "./styled"

export const Calculator = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState(0);

    const rate = status === "success" && currency[19].rates[currencyIndex].mid;
    const currencyName = status === "success" && currency[19].rates[currencyIndex].currency;
    const currencyCode = status === "success" && currency[19].rates[currencyIndex].code;

    const onInputChange = ({ target }) => {
        setAmount(target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const onButtonClick = () => {
        const result = amount * rate;
        setResult(result);
    }

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
                {amount} {currencyName} {`(${currencyCode})`} to {result.toFixed(2)} PLN
            </Result>
        </Wrapper>
    )
}