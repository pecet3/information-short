import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper.js"
import { Error } from "../../common/Notifications/Error/index.js";
import { Loading } from "../../common/Notifications/Loading/index.js";
import { fetchDogs, selectDogs, selectDogsStatus } from "./dogsSlice.js";
import { Image } from "./styled.js";
export const Dogs = () => {
    const dispatch = useDispatch();
    const dogs = useSelector(selectDogs);
    const status = useSelector(selectDogsStatus);

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch])


    return (
        <MainWrapper oneColumn={true}>
            {status === "initial"
                || status === "loading"
                ? <Loading />
                : status === "error"
                    ? <Error />
                    : <Image src={dogs.message} alt="zdjęcie psa" />}
        </MainWrapper>
    )
};