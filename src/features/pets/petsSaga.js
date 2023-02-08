import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchDogs, fetchDogsError, fetchDogsSuccess } from "./petsSlice";
import { getDogs } from "./Dogs/getDogs";

function* dogsFetchHandler() {
    try {
        const dogs = yield call(getDogs)
        yield put(fetchDogsSuccess(dogs))
    } catch (error) {
        yield put(fetchDogsError(error))
        yield call(console.log(error))
    }
};

export function* petsSaga() {
    yield takeLatest(fetchDogs.type, dogsFetchHandler)
}