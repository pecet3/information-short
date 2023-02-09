const link = "https://aws.random.cat/meow";

export const getCats = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(response.text)
    }

    return response.json();
}