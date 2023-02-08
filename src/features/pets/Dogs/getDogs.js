const link = "https://dog.ceo/api/breeds/image/random";

export const getDogs = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(response.text)
    }

    return response.json();
}