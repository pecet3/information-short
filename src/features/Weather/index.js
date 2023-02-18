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
            <MainWrapper threeColumns={true}>
                <Table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Temperatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {status === "success" &&
                            tempTime.map((element) =>
                                <tr key={nanoid()}>
                                    <Td>{element.time}</Td>
                                    <Td>{element.temperature}</Td>
                                </tr>)}
                    </tbody>
                </Table>
            </MainWrapper>

        </>
    )
};