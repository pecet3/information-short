import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BigImage } from "../../common/BigImage";
import { MainWrapper } from "../../common/MainWrapper"
import { Error } from "../../common/notifications/Error";
import { Loading } from "../../common/notifications/Loading";
import { RefreshButton } from "../../common/RefreshButton";
import { selectNewsStatus } from "../News/newsSlice";
import { fetchCats, selectCatsStatus, selectCats } from "./catsSlice";

export const Cats = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectCatsStatus);
    const cats = useSelector(selectCats)
    const newsStatus = useSelector(selectNewsStatus);

    useEffect(() => {
        dispatch(fetchCats())
    }, [dispatch])

    useEffect(() => {
        newsStatus === "error" &&
            window.location.reload()
    }, [newsStatus])

    return (
        <MainWrapper hugeFlankPadding={true}>
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