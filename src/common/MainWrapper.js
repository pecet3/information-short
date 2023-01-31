import styled from "styled-components";

export const MainWrapper = styled.main`
    background-color: ${({ theme }) => theme.elements.bigTile};
    text-align: left;
    padding: 10px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    color: ${({ theme }) => theme.elements.text};
`;