const link = "https://newsdata.io/api/1/news?apikey=pub_163822718b0ac93ae2e06d248d835a218c6dd&language=pl";

export const getNews = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(response.text);
    }

    return response.json();
};