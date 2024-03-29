import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 20px;
    text-align: center;
    
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 140px;
`;

export const Result = styled.p`
    margin-top: 10px;
    font-size: 18px;
    color: transparent
    ${({ notTransparent }) => notTransparent && css`
        color: ${({ theme }) => theme.elements.text};
    `}
`;

export const Fieldset = styled.fieldset`
    padding: 20px 26px;  
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
    background-color: ${({ theme }) => theme.elements.calculator};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.elements.buttonBackground};
    border: none;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
    transition:  0.3s;

    &:hover{
        cursor: pointer;
        filter: brightness(0.8);
    }
`;

export const Legend = styled.legend`
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.elements.primaryBackground};
    border: 1px solid ${({ theme }) => theme.elements.text};
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
    color: ${({ theme }) => theme.elements.primary};
`;
export const Label = styled.label`
    display: flex;
    justify-content: center;
    gap: 6px;
`;
