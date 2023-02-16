import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Tile } from "../News/Tile";
import { fetchWeather, selectWeather, selectWeatherStatus } from "./weatherSlice";

export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const status = useSelector(selectWeatherStatus);


    useEffect(() => {
        dispatch(fetchWeather())
    }, [dispatch])

    useEffect(() => {
        status === "success" &&
            console.log(weather);
    }, [weather, status]);

    return (
        <>
            <MainWrapper threeColumns={true}>
                <ul>
                    {status === "success" &&
                        weather.time.map((data) =>
                            <li key={nanoid()}>
                                {data}
                            </li>)}
                </ul>
                <ul>
                    {status === "success" &&
                        weather.temperature_2m.map((data) =>
                            <li key={nanoid()}>
                                {data}
                            </li>)}
                </ul>
            </MainWrapper>

        </>
    )
};