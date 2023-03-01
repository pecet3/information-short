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
    Colors,
} from 'chart.js';
import { Container, StyledLine } from "./styled";

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


export const WindSpeedChart = () => {
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


    ChartJS.defaults.color = theme.elements.text;
    const data = {
        labels,
        datasets: [
            {
                label: `Prędkość wiatru (${status === "success" && weather.hourly_units.windspeed_10m})`,
                data: status === "success"
                    ? weather.hourly.windspeed_10m
                    : [],
                borderColor: theme.colors.grayChateau,
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
        <Container>
            <StyledLine options={options} data={data} />
        </Container>
    )
}