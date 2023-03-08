import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus } from "../currencySlice"
import { Form, Wrapper, Input } from "./styled"

export const Calculator = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);

    const onInputChange = ({ target }) => {
        console.log(target.value)
    }

    return (
        <Wrapper>
            <Form onChange={(event) => event.preventDefault()}>
                <Input type="number" min="0.01" step="0.01" onChange={onInputChange}>

                </Input>
            </Form>
        </Wrapper>
    )
}