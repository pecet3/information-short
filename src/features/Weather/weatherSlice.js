import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        status: "initial",
        cityIndex: 0,
        hoursToDisplay: 24,
        showTable: true,
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
        createTemperatureDateArray: (state) => {
            state.temperatureDate = []

            for (const i in state.data.hourly.time) {
                const temperature = state.data.hourly.temperature_2m[i]
                const date = new Date(Date.parse(state.data.hourly.time[i]));
                state.temperatureDate.push
                    ({
                        date: date,
                        temperature: temperature,
                    })
            }
        },
        setCityIndex: (state, { payload: cityIndex }) => {
            state.cityIndex = cityIndex
        },
        setHoursToDisplay: (state, { payload: hoursToDisplay }) => {
            state.hoursToDisplay = hoursToDisplay
        },
        setShowTable: (state) => {
            state.showTable = !state.showTable
            console.log(state.showTable)
        },
    },
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError,
    createTemperatureDateArray,
    setCityIndex,
    setHoursToDisplay,
    setShowTable, } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).data;
export const selectWeatherHourly = state => selectWeatherState(state).data.hourly;
export const selectWeatherStatus = state => state.weather.status;
export const selectTemperatureDate = state => selectWeatherState(state).temperatureDate;
export const selectCityIndex = state => selectWeatherState(state).cityIndex;
export const selectHoursToDisplay = state => selectWeatherState(state).hoursToDisplay;
export const selectShowTable = state => selectWeatherState(state).showTable;

export default weatherSlice.reducer;   