export const toNews = () => "/news";
export const toWeather = () => "/pogoda";
export const toDogs = () => "/pieski";
export const toCats = () => "/cats";

export const toArticle = ({ id } = { id: ":id" }) => `/news/${id}`;