import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Table, Td } from "./styled";

import { fetchWeather, selectTempTime, selectWeather, selectWeatherHourly, selectWeatherStatus, } from "./weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const status = useSelector(selectWeatherStatus);
    const tempTime = useSelector(selectTempTime);

    useEffect(() => {
        status === "initial"
            && dispatch(fetchWeather())
    }, [dispatch, status])

    useEffect(() => {
        status === "success" &&
            console.log(weather);
    }, [weather, status]);

    return (
        <>
            <MainWrapper>
                <h2>Pogoda w Gdańsku</h2>
                <Table>
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
                </Table>
            </MainWrapper>

        </>
    )
};