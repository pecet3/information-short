import styled, { css } from "styled-components";
import { ReactComponent as ListSvg } from "./list.svg";
import { ReactComponent as CrossSvg } from "./cross.svg";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    display: none;
    flex-direction: column;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        display: flex;
    }
`;
export const ListIcon = styled(ListSvg)`
    width: 100%;
    height: 100%;
    display: inline-block;
    
`;
export const CrossIcon = styled(CrossSvg)`
    width: 100%;
    height: 100%;
    display: inline-block;
`;
export const List = styled.ul`
    display: none;
    flex-direction: column;
    background-color: ${({ theme }) => theme.elements.navigationMobile};
    align-self: flex-end;
    margin: 0;
    text-align: center;
    list-style: none;
    padding: 0;
    
    ${({ display }) => display && css`
        display: flex;
    `}
`;

export const Button = styled.button`
    display: none;
    align-self: flex-end;
    padding: 0;
    width: 28px;
    height: 28px;
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
    width: 100%;
    height: 100%;
    display: inline-block;
    color: ${({ theme }) => theme.elements.navigationText};
    transition: color 0.4s;
    font-size: 18px;

    &:visited{
        text-decoration: none;
        color: ${({ theme }) => theme.elements.navigationText};
        
        &.active{
        color: ${({ theme }) => theme.elements.primary};
        }
    }
`;

export const ListContainer = styled.div`
border-radius: 50%;
`;
export const Li = styled.li`
    padding: 4px;
`;