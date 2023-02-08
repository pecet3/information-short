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
        <Wrapper as="article" noRender={!image && true}>
            <Header>
                {image &&
                    <Image
                        src={image}
                        alt="zdjęcie newsa"
                    />}
                <Title>{title && title}</Title>
                <Date>{date && date}</Date>
            </Header>
            <Description>{description && description}</Description>
            {content &&
                <StyledLink to={`/news/${title}`}>
                    Czytaj dalej ➡
                </StyledLink>}
        </Wrapper>
    )
};