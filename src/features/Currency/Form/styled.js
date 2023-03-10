import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 10px 0 14px;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column;
        gap: 10px;
    }
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

        @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
            align-self: flex-start;
        }
    `}
`;

export const Input = styled.input`
`;