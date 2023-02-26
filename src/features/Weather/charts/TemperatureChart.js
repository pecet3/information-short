import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { selectHoursToDisplay, selectShowData, selectWeather, selectWeatherStatus } from "../weatherSlice";
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


export const TemperatureChart = () => {
    const status = useSelector(selectWeatherStatus);
    const weather = useSelector(selectWeather);
    const theme = useTheme();
    const hoursToDisplay = useSelector(selectHoursToDisplay);
    const showData = useSelector(selectShowData);


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


    ChartJS.defaults.color = theme.elements.text;
    const data = {
        labels,
        datasets: [
            {
                label: `Temperatura (${status === "success" && weather.hourly_units.temperature_2m})`,
                data: status === "success" && showData[0].show
                    ? weather.hourly.temperature_2m : [],
                borderColor: theme.elements.primary,
                backgroundColor: theme.elements.tile,
            },
            {
                label: `Odczuwalna temperatura (${status === "success" && weather.hourly_units.temperature_2m})`,
                data: status === "success" && showData[1].show
                    ? weather.hourly.apparent_temperature : [],
                borderColor: theme.elements.textImportant,
                backgroundColor: theme.elements.primaryBackground,
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