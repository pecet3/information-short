import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MainWrapper } from "../../common/MainWrapper.js";
import { BigImage } from "../../common/BigImage.js";
import { RefreshButton } from "../../common/RefreshButton/index.js";
import { Error } from "../../common/notifications/Error/index.js";
import { Loading } from "../../common/notifications/Loading/index.js";
import {
    fetchDogs,
    selectDogs,
    selectDogsStatus,
} from "./dogsSlice.js";
import { selectNewsStatus } from "../News/newsSlice.js";


export const Dogs = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(selectDogs);
    const status = useSelector(selectDogsStatus);
    const newsStatus = useSelector(selectNewsStatus)

    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch])

    useEffect(() => {
        newsStatus === "error" &&
            window.location.reload()
    }, [newsStatus])

    return (
        <MainWrapper>
            {status !== "initial" &&
                <RefreshButton
                    action={() => dispatch(fetchDogs())}
                    buttonText="Załaduj nowego pieska"
                />
            }
            {status === "initial"
                || status === "loading"
                ? <Loading />
                : status === "error"
                    ? <Error />
                    : <BigImage src={dogs.message} alt="zdjęcie psa" />}
        </MainWrapper>
    )
};