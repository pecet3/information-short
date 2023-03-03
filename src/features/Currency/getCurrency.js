import axios from "axios";
import { fetchCurrency, fetchCurrencySuccess, fetchCurrencyError } from "./currencySlice";

export const getCurrency = async (dispatch) => {
    dispatch(fetchCurrency())
    try {
        const response = await axios.get("https://api.nbp.pl/api/exchangerates/tables/a/last/7?format=json")
        dispatch(fetchCurrencySuccess(response.data))
    } catch {
        dispatch(fetchCurrencyError())
    }

};

