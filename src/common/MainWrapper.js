import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
    background-color: ${({ theme }) => theme.elements.bigTile};
    text-align: left;
    padding: 10px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    color: ${({ theme }) => theme.elements.text};

    ${({ oneColumn }) => oneColumn && css`
        grid-template-columns: auto;
    `}

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }


    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin: 0;
    }
`;