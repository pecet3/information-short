import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/News/newsSlice";
import rootSaga from "./rootSaga";
import dogsReducer from "./features/pets/Dogs/dogsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        news: newsReducer,
        dogs: dogsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
