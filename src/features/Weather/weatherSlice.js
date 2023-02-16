import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: [],
        status: "initial",
    },
    reducers: {
        fetchWeather: (state) => {
            state.status = "loading"
        },
        fetchWeatherSuccess: (state, { payload: weather }) => {
            state.status = "success"
            state.weather = weather
            console.log(state.weather.hourly.temperature_2m);
        },
        fetchWeatherError: (state) => {
            state.status = "error"
        },
    }
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError, } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).hourly;
export const selectWeatherStatus = state => selectWeatherStatus(state).status;


export default weatherSlice.reducer;   