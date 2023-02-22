import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 10px 0;
    padding: 0 8%;
`;
export const StyledForm = styled.form`
    display: flex;
    gap: 10%;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
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