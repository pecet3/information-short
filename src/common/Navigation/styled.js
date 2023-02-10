import styled from "styled-components";
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
    
`;
export const List = styled.ul`
    list-style: none;
    margin: 0;
    display: none;

    ${DropDownContainer}:hover & {
        display: block;
    }
`;

