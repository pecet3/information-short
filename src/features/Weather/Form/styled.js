import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    margin: 10px 0;
    padding: 0 8%;
`;
export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-bottom: 14px;

    @media(max-width:${({ theme }) => theme.breakpoints.large}px){
        flex-direction: column;
    }
`;
export const Legend = styled.legend`

`;
export const Select = styled.select`
    width: 160px;
`;
export const Option = styled.option`

`;
export const Span = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    @media(max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-top: 10px;
        ${({ firstElement }) => firstElement && css`
        margin-top: 0;
        `}
    }
`;
export const Button = styled.button`
    width: 140px;
    height: 28px;
`;

export const Label = styled.label`
    display: flex;
    gap: 10px;
`;
export const Input = styled.input`
`;