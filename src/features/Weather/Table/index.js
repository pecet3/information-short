import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectHoursToDisplay, selectDataArray, selectWeather, selectWeatherStatus, selectShowData } from "../weatherSlice";
import { StyledTable, Td, Th, Tr, Wrapper } from "./styled";
export const Table = () => {
    const weather = useSelector(selectWeather)
    const dataArray = useSelector(selectDataArray);
    const status = useSelector(selectWeatherStatus);
    const hoursToDisplay = useSelector(selectHoursToDisplay);
    const showData = useSelector(selectShowData);
    return (
        <Wrapper>
            <StyledTable noRender={!showData[0].show ? true : false}>
                <thead>
                    <tr>
                        <Th as="th">Data</Th>
                        <Th as="th">Godzina</Th>
                        <Th as="th">Temperatura</Th>
                        <Th as="th">
                            Odczuwalna
                            <br />Temperatura
                        </Th>
                        <Th as="th">
                            Szansa
                            <br />Opadów
                        </Th>
                        <Th as="th">
                            Prędkość
                            <br />Wiatru
                        </Th>
                    </tr>
                </thead>
                <tbody>
                    {status === "success" &&
                        dataArray.slice(0, hoursToDisplay).map((element) =>
                            <Tr key={nanoid()}>
                                <Td scope="row">
                                    {element.date.toLocaleDateString(undefined, {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </Td>
                                <Td scope="row">
                                    {element.date.toLocaleTimeString('pl-PL')}
                                </Td>
                                <Td scope="row">
                                    {element.temperature} {weather.hourly_units.temperature_2m}
                                </Td>
                                <Td scope="row">
                                    {element.apparentTemperature} {weather.hourly_units.apparent_temperature}
                                </Td>
                                <Td scope="row">
                                    {element.precipitationProbability} {weather.hourly_units.precipitation_probability}
                                </Td>
                                <Td scope="row">
                                    {element.windSpeed} {weather.hourly_units.windspeed_10m}
                                </Td>
                            </Tr>)}
                </tbody>
            </StyledTable>
        </Wrapper>
    )
}