import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../common/Notifications/Error";
import { Loading } from "../../common/Notifications/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { fetchNews, selectNews, selectStatus } from "./newsSlice";
import { Tile } from "./Tile";
import { useEffect } from "react";


export const News = () => {
    const news = useSelector(selectNews);
    const status = useSelector(selectStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    return (
        <>
            <MainWrapper oneColumn=
                {status === "error"
                    || status === "loading"
                    || status === "initial" ? true : false}>
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