import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { selectCityIndex, selectWeatherStatus } from "./weatherSlice";
import { TemperatureChart } from "./charts/TemperatureChart.js";
import { Form } from "./Form";
import { Table } from "./Table";
import { getWeather } from "./getWeather";
import { PrecipitationChart } from "./charts/PrecipitationChart";
import { WindSpeedChart } from "./charts/WindSpeedChart";
import { MinorChartsContainer } from "./styled";


export const Weather = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);
    const status = useSelector(selectWeatherStatus);

    useEffect(() => {
        status === "initial"
            && getWeather(dispatch, cityIndex);
    }, [dispatch, cityIndex, status]);

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    return (
        <MainWrapper littleFlankPadding={true}>
            <Form />
            <TemperatureChart />
            <MinorChartsContainer>
                <PrecipitationChart />
                <WindSpeedChart />
            </MinorChartsContainer>
            <Table />
        </MainWrapper>
    )
};