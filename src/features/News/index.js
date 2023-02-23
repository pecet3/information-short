import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../common/notifications/Error";
import { Loading } from "../../common/notifications/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { fetchNews, selectNews, selectNewsStatus } from "./newsSlice";
import { Tile } from "./Tile";
import { useEffect } from "react";


export const News = () => {
    const news = useSelector(selectNews);
    const status = useSelector(selectNewsStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        status === "initial" &&
            dispatch(fetchNews());
    }, [status, dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <MainWrapper threeColumns=
                {status === "success" ? true : false}>
                {status === "error"
                    ? <Error />
                    : status === "initial" || status === "loading"
                        ? <Loading />
                        : news.map((article) =>
                            <Tile
                                key={nanoid()}
                                title={article.title}
                                image={article.image_url}
                                date={article.pubDate}
                                description={article.description}
                                content={article.content}
                            />)}
            </MainWrapper>
        </>
    )
};