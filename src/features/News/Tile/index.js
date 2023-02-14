import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs, selectDogs, selectDogsStatus } from "../../Dogs/dogsSlice";
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
    const dispatch = useDispatch();
    const dogs = useSelector(selectDogs);
    const dogsStatus = useSelector(selectDogsStatus);

    useEffect(() => {
        !image
            && dogsStatus === "initial"
            && dispatch(fetchDogs());
    }, [dispatch, image, dogsStatus])

    return (
        <Wrapper >
            <Header>
                <Image
                    src={image
                        ? image
                        : dogs && dogs.message}
                    alt="zdjęcie newsa"
                />
                <Title>{title && title}</Title>
                <Date>{date && date}</Date>
            </Header>
            <Description>
                {description && description}
            </Description>
            {content &&
                <StyledLink to={`/news/${date}`}>
                    Czytaj dalej ➡
                </StyledLink>}
        </Wrapper>
    )
};