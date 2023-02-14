import {
    toNews,
    toWeather,
    toDogs,
    toCats,
    toPets
} from "../../routes";

import {
    DropDownLink,
    DropDownContainer,
    Li,
    DropDownList,
    StyledNavLink
    , Wrapper
} from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <StyledNavLink to={toNews()}>News</StyledNavLink>
            <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
            <DropDownContainer>
                <StyledNavLink to={toPets()}>Zwierzęta</StyledNavLink>
                <DropDownList>
                    <Li>
                        <DropDownLink to={toDogs()}>Pieski</DropDownLink>
                    </Li>
                    <Li lastElement={true}>
                        <DropDownLink to={toCats()}>Kotki</DropDownLink>
                    </Li>
                </DropDownList>
            </DropDownContainer>
        </Wrapper>
    )
};