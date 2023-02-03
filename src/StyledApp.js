import styled from "styled-components";

export const StyledApp = styled.div`
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px 10px 10px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        padding: 0 5px 5px 5px;
    }
`;