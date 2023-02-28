import { useState } from "react";
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
    NavList,
    Button,
    MobileContainer,
} from "./styled";


export const Navigation = () => {
    const [displayList, setDisplayList] = useState(false);

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
            <MobileContainer>
                <Button onClick={() => setDisplayList(!displayList)}>
                    <Icon />
                </Button>
                <NavList display={displayList}>
                    <li>
                        <StyledNavLink to={toNews()}>News</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                    </li>
                </NavList>
            </MobileContainer>

        </Wrapper>
    )
};