import { useState } from "react";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus } from "../currencySlice"
import { Form, Wrapper, Input, Result } from "./styled"

export const Calculator = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState(1);

    const rate = status === "success" && currency[19].rates[currencyIndex].mid;
    const currencyName = status === "success" && currency[19].rates[currencyIndex].currency;
    const currencyCode = status === "success" && currency[19].rates[currencyIndex].code;

    const onInputChange = ({ target }) => {
        const result = target.value * rate;
        setResult(result);
        setAmount(target.value);
    }

    return (
        <Wrapper>
            <Form onChange={(event) => event.preventDefault()}>
                <Input type="number" min="0.01" step="0.01" value={amount} onChange={onInputChange} />

            </Form>
            <Result>
                {amount} {currencyName} {`(${currencyCode})`} to {result} PLN
            </Result>
        </Wrapper>
    )
}