import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;
    background-color: ${({ theme }) => theme.elements.headerBackground};
    padding: 24px;
    font-family: 'Roboto Mono', monospace;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        padding: 10px 10px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.elements.header};
    letter-spacing: 0.1em;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 22px;
    }
    
`;