import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchDogs, fetchDogsError, fetchDogsSuccess } from "./dogsSlice";
import { getDogs } from "./getDogs";

function* dogsFetchHandler() {
    try {
        const dogs = yield call(getDogs)
        yield put(fetchDogsSuccess(dogs))
    } catch (error) {
        yield put(fetchDogsError(error))
        yield call(console.log(error))
    }
};

export function* dogsSaga() {
    yield takeLatest(fetchDogs.type, dogsFetchHandler)
}