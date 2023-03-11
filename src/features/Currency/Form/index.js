import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"
import {
    selectCurrency,
    selectCurrencyStatus,
    selectCurrencyIndex,
    setCurrencyIndex,
    selectIsIntoPLN,
    setIsIntoPLN,
} from "../currencySlice"
import { Fieldset, Input, Label, Option, Select, StyledForm } from "./styled";

export const Form = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const currencyIndex = useSelector(selectCurrencyIndex);
    const isIntoPLN = useSelector(selectIsIntoPLN);

    const onCurrencyIndexChange = ({ target }) => {
        dispatch(setCurrencyIndex(target.value));
    };

    const onIsIntoPLNChange = () => {
        dispatch(setIsIntoPLN())
    };


    return (
        <StyledForm onSubmit={(event) => event.preventDefault()}>
            <Fieldset>
                <Label>
                    Wybierz walutę
                </Label>
                <Select
                    name="currencyIndex"
                    value={currencyIndex}
                    onChange={onCurrencyIndexChange}>
                    {status === "success"
                        && currency[0].rates.map((element, index) =>
                            <Option
                                key={nanoid()}
                                value={index}>
                                {element.currency}
                            </Option>)}
                </Select>
            </Fieldset>
            <Fieldset rowDirection>
                <Label>
                    <Input
                        type="radio"
                        name="isIntoPLN"
                        checked={isIntoPLN}
                        onChange={onIsIntoPLNChange}
                    />
                    PLN
                </Label>
                <Label>
                    <Input
                        type="radio"
                        name="isIntoPLN"
                        onChange={onIsIntoPLNChange}
                        checked={!isIntoPLN}
                    />
                    {status === "success"
                        && currency[0].rates[currencyIndex].code}
                </Label>
            </Fieldset>
        </StyledForm>
    )
}