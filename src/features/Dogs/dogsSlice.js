import { createSlice } from "@reduxjs/toolkit";

export const dogsSlice = createSlice({
    name: "dogs",
    initialState: {
        status: "initial",
    },
    reducers: {
        fetchDogs: (state) => {
            state.status = "loading"
        },
        fetchDogsSuccess: (state, { payload: dogs }) => {
            state.status = "success"
            state.dogs = dogs
            console.log(state.dogs)
        },
        fetchDogsError: (state) => {
            state.status = "error"
        },
    }
});

export const { fetchDogs, fetchDogsError, fetchDogsSuccess } = dogsSlice.actions;

export const selectDogsState = (state) => state.dogs;
export const selectDogsStatus = (state) => selectDogsState(state).status;
export const selectDogs = (state) => selectDogsState(state).dogs;

export default dogsSlice.reducer;