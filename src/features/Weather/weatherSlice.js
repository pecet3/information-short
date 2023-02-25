import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        status: "initial",
        cityIndex: 0,
        hoursToDisplay: 24,
        showTable: false,
        showData: [
            {
                name: "temperature",
                text: "Pokaż temperature",
                show: true,
            },
            {
                name: "apparent temperature",
                text: "Pokaż odczuwalną temperature",
                show: false,
            }
        ]
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
        createDataArray: (state) => {
            state.dataArray = []

            for (const i in state.data.hourly.time) {
                const temperature = state.data.hourly.temperature_2m[i]
                const date = new Date(Date.parse(state.data.hourly.time[i]));
                state.dataArray.push
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
        },
        setShowTemperature: (state) => {
            state.showData[0].show = !state.showData[0].show
        },
        setShowApparentTemperature: (state) => {
            state.showData[1].show = !state.showData[1].show
        },

    },
});

export const {
    fetchWeather,
    fetchWeatherSuccess,
    fetchWeatherError,
    createDataArray,
    setCityIndex,
    setHoursToDisplay,
    setShowTable,
    setShowTemperature,
    setShowApparentTemperature } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).data;
export const selectWeatherHourly = state => selectWeatherState(state).data.hourly;
export const selectWeatherStatus = state => state.weather.status;
export const selectdataArray = state => selectWeatherState(state).dataArray;
export const selectCityIndex = state => selectWeatherState(state).cityIndex;
export const selectHoursToDisplay = state => selectWeatherState(state).hoursToDisplay;
export const selectShowTable = state => selectWeatherState(state).showTable;
export const selectShowData = state => selectWeatherState(state).showData;

export default weatherSlice.reducer;   