import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { selectCurrencyStatus } from "./currencySlice";
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
            <p>test</p>
        </MainWrapper>
    )
};