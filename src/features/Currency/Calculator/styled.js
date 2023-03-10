import styled from "styled-components";

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
`;

export const Fieldset = styled.fieldset`
    width: 300px;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
`;

export const Button = styled.button`

`;

export const Legend = styled.legend`
    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.elements.text};
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
    color: ${({ theme }) => theme.elements.primary};
`;
export const Label = styled.label`
    display: flex;
    justify-content: center;
    gap: 6px;
`;
