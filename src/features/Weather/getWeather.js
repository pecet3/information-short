import axios from "axios";
import { cities } from "./cities";
import {
    createTemperatureDateArray,
    fetchWeather,
    fetchWeatherError,
    fetchWeatherSuccess,
} from "./weatherSlice";


export const getWeather = async (dispatch, cityIndex) => {
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