import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: left;
    background-color: ${({ theme }) => theme.elements.headerBackground};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.elements.header};
    margin: 0;
`;