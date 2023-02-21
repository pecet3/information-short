import { useDispatch, useSelector } from "react-redux";
import { selectCityIndex, setCityIndex } from "../weatherSlice";
import { cities } from "./cities";
export const Form = () => {

    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    const onSelectChange = ({ target }) => (
        dispatch(setCityIndex(target.value))
    );

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <select name="weather" value={cityIndex} onChange={onSelectChange}>
                {cities.map((city) =>
                    <option
                        key={city.name}
                        value={cities.indexOf(city)}>
                        {city.name}
                    </option>)}
            </select>
            <button>click</button>
        </form>
    )
}