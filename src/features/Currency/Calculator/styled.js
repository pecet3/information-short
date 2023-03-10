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

export const Result = styled.div`
    margin-top: 10px;
`;

export const Fieldset = styled.fieldset`
    width: 300px;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
`;

export const Button = styled.button`

`;

export const Legend = styled.legend`

`;
export const Label = styled.label`
    display: flex;
    justify-content: center;
    gap: 6px;
`;
