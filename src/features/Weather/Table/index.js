import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectHoursToDisplay, selectShowTable, selectdataArray, selectWeather, selectWeatherStatus } from "../weatherSlice";
import { StyledTable, Td } from "./styled";
export const Table = () => {
    const weather = useSelector(selectWeather)
    const dataArray = useSelector(selectdataArray);
    const status = useSelector(selectWeatherStatus);
    const hoursToDisplay = useSelector(selectHoursToDisplay);
    const showTable = useSelector(selectShowTable);
    return (
        <StyledTable noRender={!showTable ? true : false}>
            <thead>
                <tr>
                    <Td as="th">Data</Td>
                    <Td as="th">Temperatura</Td>
                </tr>
            </thead>
            <tbody>
                {status === "success" &&
                    dataArray.slice(0, hoursToDisplay).map((element) =>
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