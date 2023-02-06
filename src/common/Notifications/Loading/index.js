import { Spinner, Subtitle, Text, Title, Wrapper } from "../styled";
import LoadingSpinner from "./spinner.svg";

export const Loading = () => {
    return (
        <Wrapper>
            <Spinner src={LoadingSpinner} alt="Ikonka ładowania" />
            <Title>Trwa ładowanie...</Title>
            <Subtitle>Prosimy o chwilę cierpliwości</Subtitle>
            <Text>
                Jeśli ładowanie trwa zbyt długo, proszę odświeżyć stronę.
            </Text>
        </Wrapper>
    )
};