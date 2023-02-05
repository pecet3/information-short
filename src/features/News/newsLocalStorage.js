const localStorageKey = "news";

export const saveNewsInLocalStorage = (news) =>
    localStorage.setItem(localStorageKey, JSON.stringify(news));

export const getNewsFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];