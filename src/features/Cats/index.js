import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BigImage } from "../../common/BigImage";
import { MainWrapper } from "../../common/MainWrapper"
import { Error } from "../../common/notifications/Error";
import { Loading } from "../../common/notifications/Loading";
import { RefreshButton } from "../../common/RefreshButton";
import { fetchCats, selectCatsStatus, selectCats } from "./catsSlice";

export const Cats = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectCatsStatus);
    const cats = useSelector(selectCats)

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])


    return (
        <MainWrapper oneColumn={true}>
            {status !== "initial" &&
                <RefreshButton
                    buttonText="Załaduj nowego kotka"
                    action={() => dispatch(fetchCats())}
                />
            }
            {status === "initial"
                || status === "loading"
                ? <Loading />
                : status === "error"
                    ? <Error />
                    : <BigImage
                        src={cats.file}
                        alt="zdjęcie kotka"
                    />}
        </MainWrapper>
    )
}