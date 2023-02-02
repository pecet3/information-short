import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { MainWrapper } from "../../../common/MainWrapper"
import { getArticleByTitle } from "../newsSlice";

export const ArticlePage = () => {
    const { id } = useParams();
    const article = useSelector(state => getArticleByTitle(state, id))
    return (
        <MainWrapper>
            <p>{id}</p>
            <p>{article && article.content}</p>
        </MainWrapper>
    )
}