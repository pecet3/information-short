import { all } from "@redux-saga/core/effects";
import { dogsSaga } from "./features/pets/Dogs/dogsSaga";
import { newsSaga } from "./features/News/newsSaga";

export default function* rootSaga() {
    yield all([
        newsSaga(),
        dogsSaga(),
    ]);
};