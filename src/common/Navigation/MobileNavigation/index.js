import { useState } from "react"
import { toCats, toDogs, toNews, toWeather } from "../../../routes"
import { Wrapper, ListIcon, List, Button, CrossIcon, StyledNavLink } from "./styled"

export const MobileNavigation = () => {
    const [showList, setShowList] = useState(false);

    return (
        <Wrapper>
            <Button onClick={() => setShowList(!showList)}>
                {showList
                    ? <CrossIcon />
                    : <ListIcon />}
            </Button>
            <List display={showList}>
                <li>
                    <StyledNavLink to={toNews()}>News</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toWeather()}>Pogoda</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toDogs()}>Pieski</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toCats()}>Kotki</StyledNavLink>
                </li>
            </List>
        </Wrapper>
    )
}