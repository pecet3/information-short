import { useEffect, useState } from "react";
import { cities } from "./cities";
export const Form = () => {
    const [cityName, setCityName] = useState(0)

    const onSelectChange = ({ target }) => (
        setCityName(target.value)
    )

    useEffect(() => {
        console.log(cities[cityName])
    }, [cityName])


    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <select name="weather" value={cityName} onChange={onSelectChange}>
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