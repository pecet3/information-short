import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        status: "initial",
        cityIndex: 0,
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
        createTempTimeArray: (state) => {
            state.tempTime = []

            for (const i in state.data.hourly.time) {
                const time = state.data.hourly.time[i];
                const temperature = state.data.hourly.temperature_2m[i]

                state.tempTime.push
                    ({
                        time: time,
                        temperature: temperature,
                    })
            }
        },
        setCityIndex: (state, { payload: cityIndex }) => {
            state.cityIndex = cityIndex
            console.log(state.cityIndex)
        }
    },
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError,
    createTempTimeArray,
    setCityIndex } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).data;
export const selectWeatherHourly = state => selectWeatherState(state).data.hourly;
export const selectWeatherStatus = state => state.weather.status;
export const selectTempTime = state => selectWeatherState(state).tempTime;
export const selectCityIndex = state => selectWeatherState(state).cityIndex;

export default weatherSlice.reducer;   