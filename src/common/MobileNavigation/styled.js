import styled, { css } from "styled-components";
import { ReactComponent as ListSvg } from "./list.svg";
import { ReactComponent as CrossSvg } from "./cross.svg";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ListIcon = styled(ListSvg)`
    width: 32px;
    height: 32px;
`;
export const CrossIcon = styled(CrossSvg)`
    width: 32px;
    height: 32px;
`;
export const List = styled.ul`
    display: none;
    flex-direction: column;
    background-color: ${({ theme }) => theme.elements.navigationMobile};
    align-self: center;
    margin: 0;
    padding: 6px 100%;
    text-align: left;

    ${({ display }) => display && css`
        display: flex;
    `}
`;

export const Button = styled.button`
    display: none;
    align-self: flex-end;
    padding: 0;
    margin: 0 6px 0 0;
    border: none;
    background-color: transparent;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display: block;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.elements.navigationText};
    transition: color 0.4s;
    padding: 0;

    &:visited{
        text-decoration: none;
        color: ${({ theme }) => theme.elements.navigationText};
        
        &.active{
        color: ${({ theme }) => theme.elements.primary};
        }
    }
`