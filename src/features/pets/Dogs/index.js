import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../../common/MainWrapper.js";
import { Error } from "../../../common/notifications/Error/index.js";
import { Loading } from "../../../common/notifications/Loading/index.js";
import {
    fetchDogs,
    selectDogs,
    selectDogsStatus,
} from "./dogsSlice.js";
import {
    Button,
    ButtonIcon,
    Image,
    ButtonText,
} from "../styled.js";
import { useEffect } from "react";
import { selectNewsStatus } from "../../News/newsSlice.js";


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
        <MainWrapper oneColumn={true}>
            {status === "success" &&
                <Button onClick={() => dispatch(fetchDogs())}>
                    <ButtonIcon alt="ikonka przeładowania" />
                    <ButtonText>Załaduj nowego pieska</ButtonText>
                </Button>
            }
            {status === "initial"
                || status === "loading"
                ? <Loading />
                : status === "error"
                    ? <Error />
                    : <Image src={dogs.message} alt="zdjęcie psa" />}
        </MainWrapper>
    )
};