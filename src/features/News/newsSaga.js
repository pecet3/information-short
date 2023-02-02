import {
    call,
    takeLatest,
    put
} from "@redux-saga/core/effects";
import { getNews } from "./getNews";
import { fetchNews, fetchNewsSuccess } from "./newsSlice";

function* fetchNewsHandler() {
    try {
        const news = yield call(getNews);
        yield put(fetchNewsSuccess(news));
    } catch (error) {
        yield call(console.error(error));
    }
};

export function* newsSaga() {
    yield takeLatest(fetchNews.type, fetchNewsHandler);
};



