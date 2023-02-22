import { useDispatch, useSelector } from "react-redux";
import { selectCityIndex, setCityIndex } from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option, Wrapper } from "./styled";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    const onCitiesChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );
    const onDaysChange = ({ target }) => (
        console.log(target.value)
    );

    return (
        <Wrapper>
            <StyledForm onSubmit={(event) => event.preventDefault()}>
                <Legend>Wybierz miasto</Legend>
                <Select name="weather" value={cityIndex} onChange={onCitiesChange}>
                    {cities.map((city) =>
                        <Option
                            key={city.name}
                            value={cities.indexOf(city)}>
                            {city.name}
                        </Option>)}
                </Select>
                <Select name="days" onChange={onDaysChange}>

                </Select>
            </StyledForm>
        </Wrapper>
    )
}