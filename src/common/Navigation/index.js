import { NavLink } from "react-router-dom";
import { toMain, toWeather } from "../../routes";
import { Li, Ul, Wrapper } from "./styled";


export const Navigation = () => {

    return (
        <Wrapper>
            <Ul>
                <Li>
                    <NavLink to={toMain()}>main</NavLink></Li>
                <Li><NavLink to={toWeather()}>pogoda</NavLink></Li>
            </Ul>
        </Wrapper>
    )
};