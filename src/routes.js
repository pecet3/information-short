export const toNews = () => "/news";
export const toWeather = () => "/pogoda";
export const toPets = () => "/zwierzeta";
export const toDogs = () => "/zwierzeta/pieski";
export const toCats = () => "/zwierzeta/cats";

export const toArticle = ({ id } = { id: ":id" }) => `/news/${id}`;