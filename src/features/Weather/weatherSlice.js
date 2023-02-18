import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        status: "initial",
    },
    reducers: {
        fetchWeather: (state) => {
            state.status = "loading"
        },
        fetchWeatherSuccess: (state, { payload: weather }) => {
            state.status = "success"
            state.data = weather
        },
        fetchWeatherError: (state) => {
            state.status = "error"
        },
    },
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError, } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).data;
export const selectWeatherTemp = state => selectWeatherState(state).data.temperature_2m;
export const selectWeatherTime = state => selectWeatherState(state).data.time;
export const selectWeatherStatus = state => state.weather.status;


export default weatherSlice.reducer;   