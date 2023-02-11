import { toNews, toWeather, toDogs, toCats } from "../../routes";
import { DropDown, DropDownContainer, Li, List, StyledNavLink, Ul, Wrapper } from "./styled";


export const Navigation = () => {
    return (
        <Wrapper>
            <Ul>
                <Li>
                    <StyledNavLink to={toNews()}>News</StyledNavLink>
                </Li>
                <Li>
                    <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                </Li>
                <Li>
                    <DropDownContainer>
                        <DropDown as="a">Zwierzęta</DropDown>
                        <List>
                            <Li displayUpright={true}>
                                <StyledNavLink to={toDogs()}>Kotki</StyledNavLink>
                            </Li>
                            <Li displayUpright={true}>
                                <StyledNavLink to={toCats()}>Pieski</StyledNavLink>
                            </Li>
                        </List>
                    </DropDownContainer>
                </Li>
            </Ul>
        </Wrapper>
    )
};