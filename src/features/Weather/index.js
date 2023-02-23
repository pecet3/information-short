import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { selectCityIndex } from "./weatherSlice";
import { Chart } from "./Chart";
import { Form } from "./Form";
import { Table } from "./Table";
import { getWeather } from "./getWeather";


export const Weather = () => {
    const dispatch = useDispatch();
    const cityIndex = useSelector(selectCityIndex);

    useEffect(() => {
        getWeather(dispatch, cityIndex);
    }, [dispatch, cityIndex]);

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    return (
        <MainWrapper littleFlankPadding={true}>
            <Form />
            <Chart />
            <Table />
        </MainWrapper>
    )
};