const link = "";

export const getCats = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        return new Error(response.text)
    }

    return response.json();
}