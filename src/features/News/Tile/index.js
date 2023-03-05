import {
    Date,
    Description,
    Header,
    Image,
    StyledLink,
    Title,
    Wrapper,
} from "./styled";
import noPhoto from "../noPhoto.png";

export const Tile = ({ title, image, date, description, content }) => {

    return (
        <Wrapper >
            <Header>
                <Image
                    src={image
                        ? image
                        : noPhoto}
                    alt="zdjęcie newsa"
                />
                <Title>{title && title}</Title>
                <Date>{date && date}</Date>
            </Header>
            <Description>
                {description && description}
            </Description>
            {content &&
                <StyledLink to={`/news/article/${date}`}>
                    Czytaj dalej ➡
                </StyledLink>}
        </Wrapper>
    )
};