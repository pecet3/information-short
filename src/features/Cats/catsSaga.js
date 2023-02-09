import { call, put, takeLatest } from "@redux-saga/core/effects"
import { fetchCats, fetchCatsError, fetchCatsSuccess } from "./catsSlice";
import { getCats } from "./getCats"

function* fetchCatsHandler() {
    try {
        const cats = yield call(getCats);
        yield put(fetchCatsSuccess(cats));
    } catch (error) {
        yield put(fetchCatsError(error));
        yield call(console.error(error));
    }
};

export function* catsSaga() {
    yield takeLatest(fetchCats.type, fetchCatsHandler)
}
