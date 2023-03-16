import styled from "styled-components";
import { ReactComponent as githubIcon } from "./github.svg";
import { ReactComponent as facebookIcon } from "./facebook.svg";

export const Wrapper = styled.footer`
    margin: 32px auto 0px auto;
    padding: 8px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.elements.primary};

    &::before{
        content: "// ";
        color: ${({ theme }) => theme.elements.primary + 70};
    }


`;

export const Container = styled.div`

`;

export const About = styled.p`
    color: ${({ theme }) => theme.elements.about};
    text-align: justify;
    max-width: 420px;
`;

export const Github = styled(githubIcon)`
`;
export const Facebook = styled(facebookIcon)`
`;