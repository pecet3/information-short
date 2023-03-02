import { useState } from "react"
import { toCats, toDogs, toNews, toPets, toWeather } from "../../routes"
import {
    Wrapper,
    ListIcon,
    List,
    Button,
    CrossIcon,
    StyledNavLink,
    ListContainer,
    Li,
    DropDownContainer,
    DropDownLi,
    DropDownList
} from "./styled"

export const MobileNavigation = () => {
    const [showList, setShowList] = useState(false);

    return (
        <Wrapper>
            <Button onClick={() => setShowList(!showList)}>
                {showList
                    ? <CrossIcon />
                    : <ListIcon />}
            </Button>
            <ListContainer>
                <List display={showList}>
                    <Li>
                        <StyledNavLink to={toNews()}>News</StyledNavLink>
                    </Li>
                    <Li>
                        <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                    </Li>
                    <Li>
                        <DropDownContainer>
                            <DropDownLi>
                                <StyledNavLink as="a">Zwierzęta</StyledNavLink>
                            </DropDownLi>
                            <DropDownList>
                                <Li>
                                    <StyledNavLink to={toDogs()}>Pieski</StyledNavLink>
                                </Li>
                                <Li>
                                    <StyledNavLink to={toCats()}>Kotki</StyledNavLink>
                                </Li>
                            </DropDownList>
                        </DropDownContainer>
                    </Li>
                </List>
            </ListContainer>
        </Wrapper>
    )
}