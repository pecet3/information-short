import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectHoursToDisplay, selectTemperatureDate, selectWeather, selectWeatherStatus } from "../weatherSlice";
import { StyledTable, Td } from "./styled";
export const Table = () => {
    const weather = useSelector(selectWeather)
    const temperatureDate = useSelector(selectTemperatureDate);
    const status = useSelector(selectWeatherStatus);
    const hoursToDisplay = useSelector(selectHoursToDisplay);

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
                    temperatureDate.slice(0, hoursToDisplay).map((element) =>
                        <tr key={nanoid()}>
                            <Td>{element.date.toLocaleDateString(undefined, {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                            })}</Td>
                            <Td>{element.temperature} {weather.hourly_units.temperature_2m}</Td>
                        </tr>)}
            </tbody>
        </StyledTable>
    )
}