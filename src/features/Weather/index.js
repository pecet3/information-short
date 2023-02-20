import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Table, Td, StyledTitle } from "./styled";
import {
    fetchWeather,
    selectTempTime,
    selectWeather,
    selectWeatherStatus,
} from "./weatherSlice";
import { Chart } from "./Chart";
import { Form } from "./Form";


export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const status = useSelector(selectWeatherStatus);
    const tempTime = useSelector(selectTempTime);

    useEffect(() => {
        status === "initial"
            && dispatch(fetchWeather())
    }, [dispatch, status])



    return (
        <>
            <MainWrapper littleFlankPadding={true}>
                <StyledTitle>Pogoda w Gdańsku</StyledTitle>
                <Form />
                <Chart />
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