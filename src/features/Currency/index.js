import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { selectCurrency, selectCurrencyStatus } from "./currencySlice";
import { getCurrency } from "./getCurrency";

export const Currency = () => {
    const status = useSelector(selectCurrencyStatus);
    const dispatch = useDispatch();
    const currency = useSelector(selectCurrency)

    useEffect(() => {
        status === "initial"
            && getCurrency(dispatch)
    }, [dispatch, status])

    return (
        <MainWrapper>
            <ul>
                {status === "success"
                    && currency.rates.map(element =>
                        <li key={element.code}>
                            {element.currency} = {element.mid.toFixed(2)} PLN
                        </li>
                    )}
            </ul>
        </MainWrapper>
    )
};