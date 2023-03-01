import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: [],
        status: "initial",
        cityIndex: 0,
        hoursToDisplay: 24,
        showData: [
            {
                name: "table",
                text: "Pokaż Tabelę",
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
                const temperature = state.data.hourly.temperature_2m[i];
                const apparentTemperature = state.data.hourly.apparent_temperature[i];
                const date = new Date(Date.parse(state.data.hourly.time[i]));
                const precipitationProbability = state.data.hourly.precipitation_probability[i];
                const windSpeed = state.data.hourly.windspeed_10m[i];
                state.dataArray.push
                    ({
                        date,
                        temperature,
                        apparentTemperature,
                        precipitationProbability,
                        windSpeed,
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
    setShowApparentTemperature } = weatherSlice.actions;

export const selectWeatherState = state => state.weather
export const selectWeather = state => selectWeatherState(state).data;
export const selectWeatherHourly = state => selectWeatherState(state).data.hourly;
export const selectWeatherStatus = state => state.weather.status;
export const selectDataArray = state => selectWeatherState(state).dataArray;
export const selectCityIndex = state => selectWeatherState(state).cityIndex;
export const selectHoursToDisplay = state => selectWeatherState(state).hoursToDisplay;
export const selectShowData = state => selectWeatherState(state).showData;

export default weatherSlice.reducer;   