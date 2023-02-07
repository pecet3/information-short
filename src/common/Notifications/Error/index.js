import { Icon, Subtitle, Title, Wrapper } from "../styled";
import ErrorIcon from "./icon.svg";

export const Error = () => {
    return (
        <Wrapper>
            <Icon src={ErrorIcon} alt="Ikonka Wykrzyknik" />
            <Title>Ups wystąpił błąd...</Title>
            <Subtitle>
                Prawdopodobnie nasze serwery zostały przeciążone.
                <br />Spróbuj ponownie później.
            </Subtitle>
        </Wrapper>
    )
};