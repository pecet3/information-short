import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Calculator } from "./Calculator";
import { CurrencyChart } from "./CurrencyChart";
import { selectCurrencyStatus } from "./currencySlice";
import { Form } from "./Form";
import { getCurrency } from "./getCurrency";

export const Currency = () => {
    const status = useSelector(selectCurrencyStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        status === "initial"
            && getCurrency(dispatch)
    }, [dispatch, status])

    return (
        <MainWrapper>
            <Form />
            <CurrencyChart />
            <Calculator />
        </MainWrapper>
    )
};