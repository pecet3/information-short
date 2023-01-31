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
        <Wrapper as="section">
            <Header>
                {image && <Image src={image} alt="zdjęcie newsa" />}
                <TitleWrapper>
                    <Title>{title && title}</Title>
                    <Date>{date && date}</Date>
                </TitleWrapper>
            </Header>
            <Description>{description && description}</Description>
        </Wrapper>
    )
};