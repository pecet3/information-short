import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
       
    }
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
`;

export const Li = styled.li`
    padding: 10px 0;
    transition: all 0.5s;

    ${({ firstElement }) => firstElement && css`
        padding-left: 20px;
    `}
    &:hover{
        filter: hue-rotate(90deg);
    }
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
    transition: all 0.5s;
    &:hover{
        cursor: pointer;
    }
`;

export const DropDownLink = styled(StyledNavLink)`
    padding-bottom: 9px;

    ${({ upright }) => upright && css`
        color: ${({ theme }) => theme.elements.text};
        padding-left: 16px;
        &:visited{
            color: ${({ theme }) => theme.elements.text};
        }
    ` }
`;

export const List = styled.ul`
    position: absolute;
    list-style: none;
    padding: 0px 16px 4px 4px;
    top: 160%;
    display: none;
    z-index: 0;
    background-color: ${({ theme }) => theme.elements.headerBackground};
    
    ${DropDownContainer}:hover & {
        display: block;
    }

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        top: 142%;
    }
`;
