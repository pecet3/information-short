import styled from "styled-components";
import { ReactComponent as Icon } from "./refreshIcon.svg";

export const Image = styled.img`
    width: 100%;
    height: auto;
    border: 2px solid ${({ theme }) => theme.elements.text};
    border-radius: 10px;
    margin-bottom: 100%;
`;

export const Button = styled.button` 
    margin: 10px; 
    padding: 10px;
    background-color: ${({ theme }) => theme.elements.navigationBackground};
    display: flex;
    align-items: center;
    justify-self: center;
    border: none;
    border-radius: 8%/50%;
    transition: transform 0.3s;

    &:hover{
        cursor: pointer;
        transform: scale(1.02);
    }
    
`;

export const ButtonIcon = styled(Icon)`
    fill: ${({ theme }) => theme.elements.header};
    width: 32px;
    height: auto;
    margin-right: 10px;
    z-index: 1;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        width: 24px;
        height: auto;
    }
`;

export const ButtonText = styled.p`
    margin: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.elements.buttonText};

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 16px;
    }
    
`;