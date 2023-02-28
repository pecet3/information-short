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
    StyledNavLink,
    Wrapper,
    Span,
    Icon,
} from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Span>
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
            </Span>

            <Icon />
        </Wrapper>
    )
};