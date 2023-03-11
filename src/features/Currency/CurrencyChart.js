import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { selectCurrency, selectCurrencyIndex, selectCurrencyStatus, selectIsIntoPLN } from "./currencySlice";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);


export const CurrencyChart = () => {
    const status = useSelector(selectCurrencyStatus);
    const currency = useSelector(selectCurrency);
    const theme = useTheme();
    const currencyIndex = useSelector(selectCurrencyIndex);
    const isIntoPLN = useSelector(selectIsIntoPLN);

    const labels = status === "success"
        ? currency.map(element => element.effectiveDate)
        : [];


    ChartJS.defaults.color = theme.elements.text;
    const data = {
        labels,
        datasets: [
            {
                label: status === "success"
                    ? isIntoPLN
                        ? `Kurs ${currency[0].rates[currencyIndex].currency} (${currency[0].rates[currencyIndex].code}) względem PLN`
                        : `Kurs PLN względem ${currency[0].rates[currencyIndex].currency} (${currency[0].rates[currencyIndex].code})`
                    : "",
                data: status === "success"
                    ? isIntoPLN
                        ? currency.map(element => element.rates[currencyIndex].mid)
                        : currency.map(element => 1 / element.rates[currencyIndex].mid)
                    : [],
                borderColor: theme.elements.primary,
                backgroundColor: theme.elements.tile,
            },

        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: true,
            },
            title: {
                display: false,
                text: ``,
            },
            colors: {
                enabled: true,
            }
        },
    };
    return (
        <Line options={options} data={data} />
    )
}