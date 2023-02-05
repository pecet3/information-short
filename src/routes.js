export const toNews = () => "/news";
export const toWeather = () => "/pogoda";

export const toArticle = ({ id } = { id: ":id" }) => `/news/${id}`;