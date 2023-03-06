import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"
import {
    selectCurrency,
    selectCurrencyStatus,
    selectCurrencyIndex,
    setCurrencyIndex,
} from "../currencySlice"
import { Label, Option, Select, SelectContainer, StyledForm } from "./styled";

export const Form = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);

    const onCurrencyIndexChange = ({ target }) => {
        dispatch(setCurrencyIndex(target.value));
    };

    return (
        <StyledForm onSubmit={(event) => event.preventDefault()}>
            <SelectContainer>
                <Label>
                    Wybierz walutę
                </Label>
                <Select name="currencyIndex" value={currencyIndex} onChange={onCurrencyIndexChange}>
                    {status === "success"
                        && currency[0].rates.map((element, index) =>
                            <Option
                                key={nanoid()}
                                value={index}>
                                {element.currency}
                            </Option>)}
                </Select>
            </SelectContainer>
        </StyledForm>
    )
}