import { Link } from "react-router-dom";
import {
    Date,
    Description,
    Header,
    Image,
    StyledLink,
    Title,
    Wrapper,
} from "./styled";


export const Tile = ({ title, image, date, description, content }) => {
    return (
        <Wrapper as="article" noRender={!description | !image && true}>
            <Header>
                {image && <Image src={image} alt="zdjęcie newsa" />}
                <Title>{title && title}</Title>
                <Date>{date && date}</Date>
            </Header>
            <Description>{description && description}</Description>
            {content && <StyledLink to={`/article/${date}`}>Czytaj dalej</StyledLink>}
        </Wrapper>
    )
};