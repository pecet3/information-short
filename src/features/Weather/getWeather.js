import axios from "axios";
import { cities } from "./cities";
import {
    createDataArray,
    fetchWeather,
    fetchWeatherError,
    fetchWeatherSuccess,
} from "./weatherSlice";

const getLink = (cityIndex) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${cities[cityIndex].latitude}&longitude=${cities[cityIndex].longitude}&hourly=temperature_2m&hourly=apparent_temperature&hourly=precipitation_probability&hourly=windspeed_10m`;
};

export const getWeather = async (dispatch, cityIndex) => {
    dispatch(fetchWeather())
    try {
        const response = await axios.get(getLink(cityIndex));
        dispatch(fetchWeatherSuccess(response.data));
        await dispatch(createDataArray());
    } catch {
        dispatch(fetchWeatherError());
    }
};