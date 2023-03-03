import axios from "axios";

export const getCurrency = async () => {
    const data = await axios.get("https://api.nbp.pl/api/exchangerates/tables/a/last/7?format=json")

}; 