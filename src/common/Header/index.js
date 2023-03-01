import { Title, Wrapper, Clock } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

export const Header = () => {
    const date = useCurrentDate();
    return (
        <Wrapper as="header">
            <Title>Informacja krótka.</Title>
            <Clock>{date.toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })}
            </Clock>
        </Wrapper>
    )
}