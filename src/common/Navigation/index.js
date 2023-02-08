import { toNews, toWeather, toDogs } from "../../routes";
import { Li, StyledNavLink, Ul, Wrapper } from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    <StyledNavLink to={toNews()}>News</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toDogs()}>🐕‍🦺Pieski</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toWeather()}></StyledNavLink>
                </Li>
            </Ul>
        </Wrapper>
    )
};