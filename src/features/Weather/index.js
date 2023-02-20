import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Table, Td, StyledTitle } from "./styled";
import {
    fetchWeather,
    selectTempTime,
    selectWeather,
    selectWeatherStatus,
} from "./weatherSlice";
import { cities } from "./cities";
import { Chart } from "./Chart";


export const Weather = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);
    const status = useSelector(selectWeatherStatus);
    const tempTime = useSelector(selectTempTime);
    const [cityName, setCityName] = useState()
    useEffect(() => {
        status === "initial"
            && dispatch(fetchWeather())
    }, [dispatch, status])



    return (
        <>
            <MainWrapper littleFlankPadding={true}>
                <StyledTitle>Pogoda w Gdańsku</StyledTitle>

                <form onSubmit={(event) => event.preventDefault()}>
                    <select name="weather" value={cityName} onChange={({ target }) => console.log(target.value)}>
                        <option value="asd"></option>
                        {cities.map(({ name }) =>
                            <option
                                key={nanoid()}
                                value={name}>{name}</option>)}
                    </select>
                    <button>click</button>
                </form>
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