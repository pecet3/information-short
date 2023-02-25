import styled, { css } from "styled-components";

export const StyledTable = styled.table`
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    margin: 20px auto;
    overflow-x: auto;

    ${({ noRender }) => noRender && css`
        display: none;
    `}
`
export const Td = styled.td`
    border: 1px solid;
    padding: 4px;
    text-align: center;
`
export const StyledTitle = styled.h2`
    text-align:center;
    margin-top: 0;
`