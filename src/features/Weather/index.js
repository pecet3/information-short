import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { Table, Td } from "./styled";
import {
    fetchWeather,
    selectTempTime,
    selectWeather,
    selectWeatherStatus,
} from "./weatherSlice";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


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

    const labels = weather.hourly.time;
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: weather.hourly.temperature_2m,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pogoda W Gdańsku',
            },
        },
    };

    return (
        <>
            <MainWrapper>
                <Line options={options} data={data} />
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