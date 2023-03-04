import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyList, selectCurrencyStatus } from "../currencySlice"

export const Form = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyList = useSelector(selectCurrencyList);
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label>
                Wybierz walutę
            </label>
            <select>
                {status === "success"
                    && currencyList.rates.map(element =>
                        <option
                            key={nanoid()}
                            value={element.currency}>
                            {element.currency}
                        </option>)}
            </select>
            <select>
                {status === "success"
                    && currency[0].rates.map(element =>
                        <option
                            key={nanoid()}
                            value={element.currency}>
                            {element.currency}
                        </option>)}
            </select>
        </form>
    )
}