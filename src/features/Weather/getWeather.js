const getLink = () => {
    const link = "https://api.open-meteo.com/v1/forecast?latitude=54.35&longitude=18.65&hourly=temperature_2m";
    return link
}


export const getWeather = async () => {
    const response = await fetch(getLink());

    if (!response.ok) {
        throw new Error(response.message)
    }

    return response.json();
}