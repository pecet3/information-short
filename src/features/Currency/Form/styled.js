import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    gap: 14%;
    justify-content: center;
    margin-bottom: 14px;
`;

export const Label = styled.label`
   
`;

export const Select = styled.select`
    width: 200px;
`;

export const Option = styled.option`

`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;

    ${({ rowDirection }) => rowDirection && css`
        flex-direction: row;
        gap: 10px;
        align-self: flex-end;
    `}
`;

export const Input = styled.input`
`;