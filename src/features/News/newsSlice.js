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
        },
    }
});

export const {
    fetchNews,
    fetchNewsSuccess,
    fetchNewsError, } = newsSlice.actions;

export const selectNewsState = (state) => state.news;

export const selectNews = (state) => selectNewsState(state).news.results;
export const selectNewsStatus = (state) => selectNewsState(state).status;

export const getArticleByName = (state, newsTitle) => {
    if (selectNews(state) === undefined) {
        return false;
    }
    return selectNews(state).find(({ title }) => title === newsTitle)
}

export default newsSlice.reducer;