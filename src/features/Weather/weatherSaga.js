import {
    call,
    takeLatest,
    put,
} from "@redux-saga/core/effects";
import { getWeather } from "./getWeather";
import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from "./weatherSlice";

function* fetchWeatherHandler() {
    try {
        const weather = yield call(getWeather);
        yield put(fetchWeatherSuccess(weather));
    } catch (error) {
        yield put(fetchWeatherError());
        yield call(console.error(error));
    }
};

export function* weatherSaga() {
    yield takeLatest(fetchWeather.type, fetchWeatherHandler);
};