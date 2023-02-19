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
import { useTheme } from "styled-components";

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
    const theme = useTheme();

    useEffect(() => {
        status === "initial"
            && dispatch(fetchWeather())
    }, [dispatch, status])

    const labels = status === "success" ? weather.hourly.time : [];
    const data = {
        labels,
        datasets: [
            {
                label: `temperatura (${status === "success" && weather.hourly_units.temperature_2m})`,
                data: status === "success" ? weather.hourly.temperature_2m : [],
                borderColor: theme.elements.primary,
                backgroundColor: theme.elements.text,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: '',
            },
        },
    };

    return (
        <>
            <MainWrapper littleFlankPadding={true}>
                <StyledTitle>Pogoda w Gdańsku</StyledTitle>
                <Line options={options} data={data} />
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