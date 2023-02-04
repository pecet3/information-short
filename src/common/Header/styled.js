import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;
    background-color: ${({ theme }) => theme.elements.headerBackground};
    padding: 24px;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;

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

export const Clock = styled.p`
    color: ${({ theme }) => theme.elements.text};
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
        margin-top: 5px;
    }
`;