import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectTempTime, selectWeather, selectWeatherStatus } from "../weatherSlice";
import { StyledTable, Td } from "./styled";
export const Table = () => {
    const weather = useSelector(selectWeather)
    const tempTime = useSelector(selectTempTime);
    const status = useSelector(selectWeatherStatus);
    return (
        <StyledTable>
            <thead>
                <tr>
                    <Td as="th">Data</Td>
                    <Td as="th">Temperatura</Td>
                </tr>
            </thead>
            <tbody>
                {status === "success" &&
                    tempTime.map((element) =>
                        <tr key={nanoid()}>
                            <Td>{element.time}</Td>
                            <Td>{element.temperature} {weather.hourly_units.temperature_2m}</Td>
                        </tr>)}
            </tbody>
        </StyledTable>
    )
}