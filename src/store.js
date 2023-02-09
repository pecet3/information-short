import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/News/newsSlice";
import rootSaga from "./rootSaga";
import dogsReducer from "./features/Dogs/dogsSlice";
import catsReducer from "./features/Cats/catsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        news: newsReducer,
        dogs: dogsReducer,
        cats: catsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
