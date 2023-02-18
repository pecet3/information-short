import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";

import { fetchWeather, selectWeather, selectWeatherHourly, selectWeatherStatus, selectWeatherTemperature, selectWeatherTime } from "./weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const status = useSelector(selectWeatherStatus);
    const temperature = useSelector(selectWeatherTemperature);
    const time = useSelector(selectWeatherTime);
    const hourly = useSelector(selectWeatherHourly);

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
            <MainWrapper threeColumns={true}>
                <ul>
                    {status === "success" &&
                        hourly.temperature_2m.map((data) =>
                            <li key={nanoid()}>
                                {data}
                            </li>)}
                </ul>
                <ul>
                    {status === "success" &&
                        hourly.time.map((data) =>
                            <li key={nanoid()}>
                                {data}
                            </li>)}
                </ul>
            </MainWrapper>

        </>
    )
};