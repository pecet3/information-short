export const toNews = () => "/news";
export const toWeather = () => "/pogoda";
export const toDogs = () => "/dogs";

export const toArticle = ({ id } = { id: ":id" }) => `/news/${id}`;