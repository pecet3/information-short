import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"
import { selectCurrency, selectCurrencyStatus } from "../currencySlice"

export const Form = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    Wybierz walutę
                </label>
                <select>
                    {status === "success"
                        && currency[0].rates.map((element, index) =>
                            <option
                                key={nanoid()}
                                value={element.currency}>
                                {element.currency}
                                {index}
                            </option>)}
                </select>
            </form>
        </>
    )
}