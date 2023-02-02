import { Link } from "react-router-dom";
import {
    Date,
    Description,
    Header,
    Image,
    Title,
    Wrapper,
    TitleWrapper,
} from "./styled";


export const Tile = ({ title, image, date, description }) => {
    return (
        <Wrapper as="article" noRender={!description && true}>
            <Header>
                {image && <Image src={image} alt="zdjęcie newsa" />}
                <TitleWrapper>
                    <Title>{title && title}</Title>
                    <Date>{date && date}</Date>
                </TitleWrapper>
            </Header>
            <Description>{description && description}</Description>
            <Link to={`/article/${title}`}>Czytaj dalej</Link>
        </Wrapper>
    )
};