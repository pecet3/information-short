import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { fetchNews, selectNews, selectStatus } from "./newsSlice";
import { Tile } from "./Tile";


export const News = () => {
    const news = useSelector(selectNews);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch]);

    return (
        <>
            <MainWrapper>
                {status === "error"
                    ? <Error />
                    : status === "initial" || status === "loading"
                        ? <Loading />
                        : news.map((element) =>
                            <Tile as="li"
                                key={nanoid()}
                                title={element.title}
                                image={element.image_url}
                                date={element.pubDate}
                                description={element.description}
                            />)}
            </MainWrapper>
        </>
    )
};