import { NavLink } from "react-router-dom";
import { toMain, toWeather } from "../../routes";
import { Li, StyledNavLink, Ul, Wrapper } from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    <StyledNavLink to={toMain()}>News</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                </Li>
            </Ul>
        </Wrapper>
    )
};