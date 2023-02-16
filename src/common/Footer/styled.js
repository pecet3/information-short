import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 32px auto 12px auto;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
`;

export const Content = styled.p`
    font-family: 'Roboto Mono', monospace;
    padding: 10px;
    color: ${({ theme }) => theme.elements.primary};

    &::before{
        content: "// ";
        color: ${({ theme }) => theme.elements.primary + 70};
    }
`;