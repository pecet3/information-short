import {
    call,
    takeLatest,
    put,
    takeEvery
} from "@redux-saga/core/effects";
import { getNews } from "./getNews";
import { saveNewsInLocalStorage } from "./newsLocalStorage";
import { fetchNews, fetchNewsError, fetchNewsSuccess } from "./newsSlice";

function* fetchNewsHandler() {
    try {
        const news = yield call(getNews);
        yield put(fetchNewsSuccess(news));
    } catch (error) {
        yield put(fetchNewsError(error));
        yield call(console.error(error));
    }
};

function* saveNewsInLocalStorageHandler() {
    const news = yield call(getNews);
    yield call(saveNewsInLocalStorage, news);
}

export function* newsSaga() {
    yield takeLatest(fetchNews.type, fetchNewsHandler);
    yield takeEvery("*", saveNewsInLocalStorageHandler)
};



