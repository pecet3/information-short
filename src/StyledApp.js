import styled from "styled-components";

export const StyledApp = styled.div`
    background-color: ${({ theme }) => theme.colors.mineshaft};
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px 10px 10px;
`;