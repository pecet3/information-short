import { useState } from "react"
import { NavLink } from "react-router-dom"
import { toNews, toWeather } from "../../../routes"
import { Wrapper, ListIcon, List, Button, CrossIcon } from "./styled"

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
                    <NavLink to={toNews()}>News</NavLink>
                </li>
                <li>
                    <NavLink to={toWeather()}>Pogoda</NavLink>
                </li>
            </List>
        </Wrapper>
    )
}