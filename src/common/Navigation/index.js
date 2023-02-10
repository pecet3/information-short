import { toNews, toWeather, toDogs, toCats } from "../../routes";
import { DropDownContainer, Li, List, StyledNavLink, Ul, Wrapper } from "./styled";


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
                        <StyledNavLink as="a">Zwierzęta</StyledNavLink>
                        <List>
                            <Li displayUpright={true}>
                                <StyledNavLink to={toDogs()}>Pieski🐕‍🦺</StyledNavLink>
                            </Li>
                            <Li displayUpright={true}>
                                <StyledNavLink to={toCats()}>Kotki🐈</StyledNavLink>
                            </Li>
                        </List>
                    </DropDownContainer>
                </Li>
            </Ul>
        </Wrapper>
    )
};