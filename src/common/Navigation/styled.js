import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    display: flex;
    margin-bottom: 0;
    padding: 0;
    font-size: 18px;
    transition: all 0.4s;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        justify-content: flex-end;
    }
`;
export const Span = styled.span`
    display: flex;
    margin: 0;
    padding: 0;
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display: none;
    }
`;
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.elements.navigationText};
    transition: color 0.4s;
    padding: 5px 10px;
    
    &::before{
        content: "◩ ";
        color: ${({ theme }) => theme.elements.navigationText + 32};
    }

    &:hover{
        background-color: ${({ theme }) => theme.elements.navigationBackgroundHover};
    }
    &:visited{
        text-decoration: none;
        color: ${({ theme }) => theme.elements.navigationText};
        
        &.active{
        color: ${({ theme }) => theme.elements.primary};
        }
    }
`;

export const DropDownContainer = styled.div`
    display: flex;
    position: relative;

    &:hover{
        cursor: pointer;
    }
`;

export const DropDownLink = styled(StyledNavLink)`
    color: ${({ theme }) => theme.elements.text};
    width: 100%;
    height: 100%;
    display: inline-flex;
    margin: 0;

    &::before{
        content: "";
    }
    
    &:hover{
        background-color: transparent;
    }
    &:visited{
        color: ${({ theme }) => theme.elements.text};
    }
`;
export const Li = styled.li`
    ${({ lastElement }) => lastElement && css`
            border-radius: 0 0 5px 5px;
        `}
    text-align: center;
    padding-left: 24px;
    &:hover{
        background-color: ${({ theme }) => theme.elements.navigationBackground + 80}
    }
   
`;


export const DropDownList = styled.ul`
    position: absolute;
    list-style: none;
    border-radius: 0 0 5px 5px;
    padding: 0;
    margin-top: 30.5px;
    width: 149.5px;
    display: none;
    background-color: ${({ theme }) => theme.elements.dropDownBackground};
    justify-self: flex-end;

    ${DropDownContainer}:focus-within & {
        display: block;  
    }   
    ${DropDownContainer}:hover & {  
        display: block;
    }
`;

