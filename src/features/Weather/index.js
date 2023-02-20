import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import {
    fetchWeather,
    selectWeatherStatus,
} from "./weatherSlice";
import { Chart } from "./Chart";
import { Form } from "./Form";
import { Table } from "./Table";


export const Weather = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectWeatherStatus);

    useEffect(() => {
        status === "initial"
            && dispatch(fetchWeather())
    }, [dispatch, status])



    return (
        <>
            <MainWrapper littleFlankPadding={true}>
                <Form />
                <Chart />
                <Table />
            </MainWrapper>
        </>
    )
};