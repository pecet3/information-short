import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"
import {
    selectCurrency,
    selectCurrencyStatus,
    selectCurrencyIndex,
    setCurrencyIndex,
    selectDaysToDisplay,
    setDaysToDisplay
} from "../currencySlice"
import { getWeeks } from "./getWeeks";
import { Label, Option, Select, SelectContainer, StyledForm } from "./styled";

export const Form = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const daysToDisplay = useSelector(selectDaysToDisplay);

    const onCurrencyIndexChange = ({ target }) => {
        dispatch(setCurrencyIndex(target.value));
    };

    const onDaysToDisplayChange = ({ target }) => {
        dispatch(setDaysToDisplay(target.value));
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
            <SelectContainer>
                <Label>
                    Podaj Liczbę tygodni
                </Label>
                <Select name="daysToDisplay" value={daysToDisplay} onChange={onDaysToDisplayChange}>
                    {getWeeks().map(week =>
                        <Option
                            key={nanoid()}
                            value={week.value}>
                            {week.name}
                        </Option>
                    )}
                </Select>
            </SelectContainer>
        </StyledForm>
    )
}