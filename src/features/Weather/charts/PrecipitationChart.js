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


export const PrecipitationChart = () => {
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
                label: `Szansa Opadów (${status === "success" && weather.hourly_units.precipitation_probability})`,
                data: status === "success" && showData[0].show
                    ? weather.hourly.precipitation_probability : [],
                borderColor: theme.colors.dodgerBlue,
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