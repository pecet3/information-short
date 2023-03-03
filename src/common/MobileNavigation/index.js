import { useState } from "react"
import { toCats, toCurrency, toDogs, toNews, toWeather } from "../../routes"
import {
    Wrapper,
    ListIcon,
    List,
    Button,
    CrossIcon,
    StyledNavLink,
    ListContainer,
    Li
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
                <List display={showList.toString()}>
                    <Li>
                        <StyledNavLink to={toNews()}>News</StyledNavLink>
                    </Li>
                    <Li>
                        <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                    </Li>
                    <Li>
                        <StyledNavLink to={toCurrency()}>Waluty</StyledNavLink>
                    </Li>
                    <Li>
                        <StyledNavLink to={toDogs()}>Pieski</StyledNavLink>
                    </Li>
                    <Li>
                        <StyledNavLink to={toCats()}>Kotki</StyledNavLink>
                    </Li>
                </List>
            </ListContainer>
        </Wrapper>
    )
}