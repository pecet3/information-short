import { useDispatch, useSelector } from "react-redux";
import { selectCityIndex, setCityIndex } from "../weatherSlice";
import { cities } from "../cities";
import { StyledForm, Legend, Select, Option } from "./styled";
export const Form = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    const onSelectChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );

    return (
        <StyledForm onSubmit={(event) => event.preventDefault()}>
            <Legend>Wybierz miasto</Legend>
            <Select name="weather" value={cityIndex} onChange={onSelectChange}>
                {cities.map((city) =>
                    <Option
                        key={city.name}
                        value={cities.indexOf(city)}>
                        {city.name}
                    </Option>)}
            </Select>
        </StyledForm>
    )
}