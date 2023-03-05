import {
    toNews,
    toWeather,
    toDogs,
    toCats,
    toPets,
    toCurrency
} from "../../routes";
import { MobileNavigation } from "../MobileNavigation";

import {
    DropDownLink,
    DropDownContainer,
    Li,
    DropDownList,
    StyledNavLink,
    Wrapper,
    Span,
} from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Span>
                <StyledNavLink to={toNews()} news="true">
                    News
                </StyledNavLink>
                <StyledNavLink to={toWeather()} weather="true">
                    Pogoda
                </StyledNavLink>
                <StyledNavLink to={toCurrency()} currency="true">
                    Waluty
                </StyledNavLink>
                <DropDownContainer>
                    <StyledNavLink to={toPets()} pets="true">
                        Zwierzęta
                    </StyledNavLink>
                    <DropDownList>
                        <Li>
                            <DropDownLink to={toDogs()}>Pieski</DropDownLink>
                        </Li>
                        <Li lastElement>
                            <DropDownLink to={toCats()}>Kotki</DropDownLink>
                        </Li>
                    </DropDownList>
                </DropDownContainer>
            </Span>
            <MobileNavigation />
        </Wrapper>
    )
};