import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper.js";
import { Error } from "../../common/Notifications/Error/index.js";
import { Loading } from "../../common/Notifications/Loading/index.js";
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
} from "./styled.js";
import icon from "./icon.svg";
import { useEffect } from "react";


export const Dogs = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(selectDogs);
    const status = useSelector(selectDogsStatus);


    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch])

    return (
        <MainWrapper oneColumn={true}>
            {status === "success" &&
                <Button onClick={() => dispatch(fetchDogs())}>
                    <ButtonIcon src={icon} alt="ikonka przeładowania" />
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