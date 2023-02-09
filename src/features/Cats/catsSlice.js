import { createSlice } from "@reduxjs/toolkit";

export const catsSlice = createSlice({
    name: "cats",
    initialState: {
        status: "initial",
    },
    reducers: {
        fetchCats: (state) => {
            state.status = "loading"
        },
        fetchCatsSuccess: (state, { payload: cats }) => {
            state.status = "success"
            state.cats = cats
        },
        fetchCatsError: (state) => {
            state.status = "error"
        },
    }
});

export const { fetchCats, fetchCatsError, fetchCatsSuccess } = catsSlice.actions;

export const selectCatsState = (state) => state.cats;
export const selectCatsStatus = (state) => selectCatsState(state).status;
export const selectCats = (state) => selectCatsState(state).cats;

export default catsSlice.reducer;