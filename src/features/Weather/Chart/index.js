import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectHoursToDisplay, selectWeather, selectWeatherStatus } from "../weatherSlice";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const Chart = () => {
    const status = useSelector(selectWeatherStatus);
    const weather = useSelector(selectWeather);
    const theme = useTheme();
    const hoursToDisplay = useSelector(selectHoursToDisplay);

    const labels = status === "success" ? weather.hourly.time.slice(0, hoursToDisplay).map((element) => {
        const date = new Date(Date.parse(element));
        return date.toLocaleString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    })
        : [];

    const data = {
        labels,
        datasets: [
            {
                label: `temperatura (${status === "success" && weather.hourly_units.temperature_2m})`,
                data: status === "success" ? weather.hourly.temperature_2m : [],
                borderColor: theme.elements.primary,
                backgroundColor: theme.elements.text,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: '',
            },
        },
    };
    return (
        <Line options={options} data={data} />
    )
}