import { all } from "@redux-saga/core/effects";
import { petsSaga } from "./features/pets/petsSaga";
import { newsSaga } from "./features/News/newsSaga";

export default function* rootSaga() {
    yield all([
        newsSaga(),
        petsSaga(),
    ]);
};