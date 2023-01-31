import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "../../common/MainWrapper";
import { fetchNews, selectNews, selectStatus } from "./News/newsSlice";
import { Tile } from "./News/Tile";


export const Main = () => {
    const news = useSelector(selectNews);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch]);

    return (
        <>
            <MainWrapper>
                {status === "success" && news.map((element) =>
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