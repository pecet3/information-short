import { useState } from "react";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus } from "../currencySlice"
import { Form, Wrapper, Input, Result } from "./styled"

export const Calculator = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const [result, setResult] = useState(0);

    const rate = status === "success" && currency[19].rates[currencyIndex].mid;

    const onInputChange = ({ target }) => {
        const result = target.value * rate;
        setResult(result);
    }

    return (
        <Wrapper>
            <Form onChange={(event) => event.preventDefault()}>
                <Input type="number" min="0.01" step="0.01" onChange={onInputChange} />
                <Result>
                    {result}
                </Result>
            </Form>
        </Wrapper>
    )
}