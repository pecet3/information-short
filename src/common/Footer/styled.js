import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 32px auto 0px auto;
    padding: 8px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.a`
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

export const About = styled.p`
    color: ${({ theme }) => theme.elements.about};
    text-align: justify;
    max-width: 420px;
`;