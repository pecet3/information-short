import { Title, Wrapper, Clock, StyledNavLink } from "./styled"
import { useCurrentDate } from "./useCurrentDate";

export const Header = () => {
    const date = useCurrentDate();
    return (
        <Wrapper as="header">
            <StyledNavLink to="/">
                <Title>Informacja krótka.</Title>
            </StyledNavLink>
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