import { useDispatch, useSelector } from "react-redux";
import { selectCityIndex, setCityIndex, setHoursToDisplay } from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option, Wrapper } from "./styled";
import { getHoursToDisplay } from "./getHoursToDisplay";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    const onCitiesChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );
    const onDaysChange = ({ target }) => (
        dispatch(setHoursToDisplay(target.value))
    );

    return (
        <Wrapper>
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <span>
                    <Legend>Wybierz miasto</Legend>
                    <Select name="weather" value={cityIndex} onChange={onCitiesChange}>
                        {cities.map(city =>
                            <Option
                                key={city.name}
                                value={cities.indexOf(city)}>
                                {city.name}
                            </Option>)}
                    </Select>
                </span>
                <span>
                    <Legend>Wybierz liczbę dni</Legend>
                    <Select name="days" onChange={onDaysChange}>
                        {getHoursToDisplay().map(day =>
                            <Option
                                key={day.name}
                                value={day.value}>
                                {day.name}
                            </Option>
                        )}
                    </Select>
                </span>
            </StyledForm>
        </Wrapper>
    )
}