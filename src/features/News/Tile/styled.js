import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.article`
    background-color: ${({ theme }) => theme.elements.tile};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
    box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.elements.tileShadow};
    transition: 0.4s;

    ${({ noRender }) => noRender && css`
        display: none;
    `}
    &:hover{
        box-shadow: none;
        filter: brightness(0.9);
    }
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin: 10px 0 0 0;
    color:${({ theme }) => theme.elements.textImportant};

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 20px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        max-height: 260px;
    }
    
`;
export const Date = styled.p`
    font-size: 12px;
    margin: 5px 0;
    font-weight: 100;
`;
export const Description = styled.p`
    font-size: 14px;
    margin: 10px 0 0 0;
`;

export const StyledLink = styled(Link)`
    margin: 10px 0 0 0;
    text-align: right;
    color: ${({ theme }) => theme.elements.primary};

    &:visited{
        color: ${({ theme }) => theme.elements.primary};
    }
`