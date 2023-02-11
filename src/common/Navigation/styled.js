import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    padding: 6px 0px 6px 6px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        padding: 2px 0px 2px 0px;
    }
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 5px 5px 5px 15px;
    gap: 20px;
`;

export const Li = styled.li`

    ${({ displayUpright }) => displayUpright && css`
        margin: 5px auto;
    `}
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.elements.navigationText};
    transition: color 0.4s;
    &:visited{
        text-decoration: none;
        color: ${({ theme }) => theme.elements.navigationText};
        
        &.active{
        color: ${({ theme }) => theme.elements.header};
    }
    
    }
        
`;

export const DropDownContainer = styled.div`
    text-align: left;
    position: relative;
`;

export const DropDown = styled(StyledNavLink)`
    padding-bottom: 10px;
`;

export const List = styled.ul`
    position: absolute;
    list-style: none;
    padding: 0px 16px 4px 4px;
    top: 160%;
    display: none;
    z-index: 1;
    background-color: ${({ theme }) => theme.elements.headerBackground};
    
    ${DropDownContainer}:hover & {
        display: block;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        top: 142%;
    }
`;
