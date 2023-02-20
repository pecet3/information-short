import { useState } from "react";
import { cities } from "./cities";
export const Form = () => {
    const [cityName, setCityName] = useState()
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <select name="weather" value={cityName} onChange={({ target }) => console.log(target.value)}>
                <option value="asd"></option>
                {cities.map(({ name }) =>
                    <option
                        key={name}
                        value={name}>{name}</option>)}
            </select>
            <button>click</button>
        </form>
    )
}