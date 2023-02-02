import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        status: "initial",
    },
    reducers: {
        fetchNews: (state) => {
            state.status = "loading"
        },
        fetchNewsSuccess: (state, { payload: news }) => {
            state.status = "success"
            state.news = news
        },
        fetchNewsError: (state) => {
            state.status = "error"
        }
    }
});

export const {
    fetchNews,
    fetchNewsSuccess } = newsSlice.actions;

export const selectNewsState = (state) => state.news;

export const selectNews = (state) => selectNewsState(state).news.results;
export const selectStatus = (state) => selectNewsState(state).status;

export default newsSlice.reducer;