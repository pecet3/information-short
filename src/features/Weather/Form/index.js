import { useDispatch, useSelector } from "react-redux";
import {
    selectCityIndex,
    selectShowData,
    selectShowTable,
    setCityIndex,
    setHoursToDisplay,
    setShowApparentTemperature,
    setShowTable,
    setShowTemperature
} from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option, Wrapper, Span, Button, Label, Input } from "./styled";
import { getHoursToDisplay } from "./getHoursToDisplay";
import { nanoid } from "@reduxjs/toolkit";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);
    const showTable = useSelector(selectShowTable);
    const showData = useSelector(selectShowData);

    const onCitiesChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );
    const onHoursChange = ({ target }) => (
        dispatch(setHoursToDisplay(target.value))
    );
    const onShowDataChange = ({ target }) => {
        target.name === "temperature"
            && dispatch(setShowTemperature())
        target.name === "apparent temperature"
            && dispatch(setShowApparentTemperature());
    };

    return (
        <Wrapper>
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <Span firstElement={true}>
                    <Legend>Wybierz miasto</Legend>
                    <Select name="weather" value={cityIndex} onChange={onCitiesChange}>
                        {cities.map(city =>
                            <Option
                                key={city.name}
                                value={cities.indexOf(city)}>
                                {city.name}
                            </Option>)}
                    </Select>
                </Span>
                <Span>
                    <Legend>Wybierz liczbę dni</Legend>
                    <Select name="days" onChange={onHoursChange}>
                        {getHoursToDisplay().map(day =>
                            <Option
                                key={day.name}
                                value={day.value}>
                                {day.name}
                            </Option>
                        )}
                    </Select>
                </Span>
                <Span>
                    <Button onClick={() => dispatch(setShowTable())}>
                        {showTable ? "Ukryj" : "Pokaż"} Tabelę
                    </Button>
                </Span>
                {showData.map(element =>
                    <Span key={nanoid()}>
                        <Label >
                            <Input
                                type="checkbox"
                                name={element.name}
                                checked={showData[showData.indexOf(element)].show && true}
                                onChange={onShowDataChange} />
                            {element.text}
                        </Label>
                    </Span>)}
            </StyledForm>
        </Wrapper>
    )
}