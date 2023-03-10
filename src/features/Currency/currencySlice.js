import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        data: [],
        status: "initial",
        currencyIndex: 7,
        isIntoPLN: true,
    },
    reducers: {
        fetchCurrency: (state) => {
            state.status = "loading"
        },
        fetchCurrencySuccess: (state, { payload: data }) => {
            state.status = "success"
            state.data = data
        },
        fetchCurrencyError: (state) => {
            state.status = "error"
        },
        setCurrencyIndex: (state, { payload: currencyIndex }) => {
            state.currencyIndex = currencyIndex
        },
        setIsIntoPLN: (state) => {
            state.isIntoPLN = !state.isIntoPLN
        }
    },
});

export const {
    fetchCurrency,
    fetchCurrencySuccess,
    fetchCurrencyError,
    setCurrencyIndex,
    setIsIntoPLN, } = currencySlice.actions;

export const selectCurrencyState = state => state.currency;
export const selectCurrency = state => selectCurrencyState(state).data;
export const selectCurrencyStatus = state => selectCurrencyState(state).status;
export const selectCurrencyIndex = state => selectCurrencyState(state).currencyIndex;
export const selectIsIntoPLN = state => selectCurrencyState(state).isIntoPLN;

export default currencySlice.reducer;   