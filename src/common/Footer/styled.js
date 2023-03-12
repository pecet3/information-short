import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 32px auto 0px auto;
    padding: 8px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
`;

export const Content = styled.a`
    font-family: 'Roboto Mono', monospace;
    padding: 10px;
    color: ${({ theme }) => theme.elements.primary};
    text-decoration: none;

    &:visited{
        color: ${({ theme }) => theme.elements.primary};
    }
    &::before{
        content: "// ";
        color: ${({ theme }) => theme.elements.primary + 70};
    }


`;