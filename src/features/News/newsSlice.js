import { createSlice } from "@reduxjs/toolkit";
import { getNewsFromLocalStorage } from "./newsLocalStorage";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: getNewsFromLocalStorage(),
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
        },
    }
});

export const {
    fetchNews,
    fetchNewsSuccess,
    fetchNewsError, } = newsSlice.actions;

export const selectNewsState = (state) => state.news;

export const selectNews = (state) => selectNewsState(state).news.results;
export const selectStatus = (state) => selectNewsState(state).status;

export const getArticleByName = (state, newsTitle) => {
    if (selectNews(state) === undefined) {
        return state.news.status;
    }
    return selectNews(state).find(({ title }) => title === newsTitle)
}

export default newsSlice.reducer;