import { Spinner, Subtitle, Title, Wrapper } from "../styled";
import LoadingSpinner from "./spinner.svg";

export const Loading = () => {
    return (
        <Wrapper>
            <Spinner src={LoadingSpinner} alt="Ikonka ładowania" />
            <Title>Trwa ładowanie...</Title>
            <Subtitle>Prosimy o chwilę cierpliwości</Subtitle>
        </Wrapper>
    )
};