export const toNews = () => "/news";
export const toWeather = () => "/pogoda";
export const toPets = () => "/zwierzeta";
export const toDogs = () => "/zwierzeta/pieski";
export const toCats = () => "/zwierzeta/kotki";
export const toCurrency = () => "/waluty";

export const toArticle = ({ id } = { id: ":id" }) => `/news/${id}`;