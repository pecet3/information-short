import { nanoid } from "@reduxjs/toolkit";
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
                    && currency.map(element =>
                        <li key={nanoid()}>
                            {element.effectiveDate} {element.rates[0].currency} {element.rates[0].mid}
                        </li>
                    )}
            </ul>
        </MainWrapper>
    )
};