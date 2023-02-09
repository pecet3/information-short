import { all } from "@redux-saga/core/effects";
import { catsSaga } from "./features/Cats/catsSaga";
import { dogsSaga } from "./features/Dogs/dogsSaga";
import { newsSaga } from "./features/News/newsSaga";

export default function* rootSaga() {
    yield all([
        newsSaga(),
        dogsSaga(),
        catsSaga(),
    ]);
};