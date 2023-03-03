import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        data: [],
        status: "initial",
    },
    reducers: {
        fetchCurrency: (state) => {
            state.status = "loading"
        },
        fetchCurrencySuccess: (state, { payload: currency }) => {
            state.status = "success"
            state.data = currency
        },
        fetchCurrencyError: (state) => {
            state.status = "error"
        },
    },
});

export const {
    fetchCurrency,
    fetchCurrencySuccess,
    fetchCurrencyError, } = currencySlice.actions;

export const selectCurrencyState = state => state.currency;
export const selectCurrency = state => selectCurrencyState(state).data;
export const selectCurrencyStatus = state => state.currency.status;

export default currencySlice.reducer;   