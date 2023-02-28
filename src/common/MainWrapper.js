import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
    background-color: ${({ theme }) => theme.elements.bigTile};
    text-align: left;
    padding: 10px 16%;
    margin-top: 10px;
    color: ${({ theme }) => theme.elements.text};
    display: grid;

    ${({ littleFlankPadding }) => littleFlankPadding && css`
        padding: 10px 5%;
    `}

    ${({ hugeFlankPadding }) => hugeFlankPadding && css`
        padding: 10px 25%;
    `}

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        padding: 5px;
        margin-top: 0;
    }

    ${({ threeColumns }) => threeColumns && css`
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        padding: 10px;

        @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        grid-template-columns: 1fr 1fr;
        }

        @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
            grid-template-columns: auto;
        }
    `}
    

`;