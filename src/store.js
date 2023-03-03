import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/News/newsSlice";
import rootSaga from "./rootSaga";
import dogsReducer from "./features/Dogs/dogsSlice";
import catsReducer from "./features/Cats/catsSlice";
import weatherReducer from "./features/Weather/weatherSlice";
import currencyReducer from "./features/Currency/currencySlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        news: newsReducer,
        dogs: dogsReducer,
        cats: catsReducer,
        weather: weatherReducer,
        currency: currencyReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
