import { all } from "@redux-saga/core/effects";
import { newsSaga } from "./features/News/newsSaga";

export default function* rootSaga() {
    yield all([
        newsSaga(),
    ]);
};