import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import {
    createTemperatureDateArray,
    fetchWeather,
    fetchWeatherError,
    fetchWeatherSuccess,
    selectCityIndex,
} from "./weatherSlice";
import { Chart } from "./Chart";
import { Form } from "./Form";
import { Table } from "./Table";
import { cities } from "./cities";


export const Weather = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    useEffect(() => {
        const getWeather = async () => {
            dispatch(fetchWeather())
            try {
                const response = await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${cities[cityIndex].latitude}&longitude=${cities[cityIndex].longitude}&hourly=temperature_2m`
                );
                dispatch(fetchWeatherSuccess(response.data));
                await dispatch(createTemperatureDateArray());
            } catch {
                dispatch(fetchWeatherError());
            }
        };
        getWeather();
    }, [dispatch, cityIndex]);


    return (
        <>
            <MainWrapper littleFlankPadding={true}>
                <Form />
                <Chart />
                <Table />
            </MainWrapper>
        </>
    )
};