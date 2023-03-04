import { useDispatch, useSelector } from "react-redux";
import {
    selectCityIndex,
    selectShowData,
    setCityIndex,
    setHoursToDisplay,
    setShowApparentTemperature,
    setShowTable,
} from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option, Wrapper, Span, Label, Input } from "./styled";
import { getHoursToDisplay } from "./getHoursToDisplay";
import { nanoid } from "@reduxjs/toolkit";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);
    const showData = useSelector(selectShowData);

    const onCitiesChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );
    const onHoursChange = ({ target }) => (
        dispatch(setHoursToDisplay(target.value))
    );
    const onShowDataChange = ({ target }) => {
        target.name === "table"
            && dispatch(setShowTable())
        target.name === "apparent temperature"
            && dispatch(setShowApparentTemperature());
    };

    return (
        <Wrapper>
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <Span firstElement={true}>
                    <Legend>Wybierz miasto</Legend>
                    <Select name="weather" value={cityIndex} onChange={onCitiesChange}>
                        {cities.map((city, index) =>
                            <Option
                                key={city.name}
                                value={index}>
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