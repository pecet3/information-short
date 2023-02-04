import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { MainWrapper } from "../../../common/MainWrapper"
import { getArticleByDate } from "../newsSlice";
import { Article, Content, Date, Header, Image, Source, Title } from "./styled";

export const ArticlePage = () => {
    const { id } = useParams();
    const article = useSelector(state => getArticleByDate(state, id))
    return (
        <MainWrapper oneColumn={true}>
            {article &&
                <>
                    <Article>
                        <Header>
                            <Image
                                src={article.image_url}
                                alt="zdjęcie do artykułu"
                            />
                            <Title>{article.title}</Title>
                            <Date>{article.pubDate}</Date>
                        </Header>
                        <Content>{article.description}</Content>
                        <Content>{article.content}</Content>
                        <Content>
                            Źródło: <Source
                                href={article.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {article.link}
                            </Source>
                        </Content>
                    </Article>
                </>}
        </MainWrapper>
    )
}