import styled from "styled-components";
import { ReactComponent as githubIcon } from "./github.svg";
import { ReactComponent as facebookIcon } from "./facebook.svg";

export const Wrapper = styled.footer`
    padding: 8px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
    color: ${({ theme }) => theme.elements.text};
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
    display: flex;
    justify-content: center;
    padding-right: 116px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column;
        padding-right: 0px;
    }
`;

export const Icons = styled.span`
    margin-right: 20px;

     @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column;
        padding-right: 0;
        margin-right: 0px;
        margin-bottom: 32px;
    }
`;


export const About = styled.p`
    color: ${({ theme }) => theme.elements.about};
    text-align: justify;
    max-width: 420px;
    margin: 0;
    letter-spacing: 1px;
`;

export const Github = styled(githubIcon)`
    margin-right: 10px;
    fill: ${({ theme }) => theme.elements.primary};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.elements.primary + 60};
        cursor: pointer;
    }
`;
export const Facebook = styled(facebookIcon)`
    fill: ${({ theme }) => theme.elements.primary};
    transition: fill 0.5s;

    &:hover {
        fill: ${({ theme }) => theme.elements.primary + 60};
        cursor: pointer;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    letter-spacing: 0;
`;
export const Li = styled.li`
    padding: 2px;
`;