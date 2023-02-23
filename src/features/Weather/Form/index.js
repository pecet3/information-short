import { useDispatch, useSelector } from "react-redux";
import { selectCityIndex, selectShowTable, setCityIndex, setHoursToDisplay, setShowTable } from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option, Wrapper, Span, Button } from "./styled";
import { getHoursToDisplay } from "./getHoursToDisplay";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);
    const showTable = useSelector(selectShowTable);

    const onCitiesChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );
    const onDaysChange = ({ target }) => (
        dispatch(setHoursToDisplay(target.value))
    );

    return (
        <Wrapper>
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <Span>
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
                    <Select name="days" onChange={onDaysChange}>
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
            </StyledForm>
        </Wrapper>
    )
}