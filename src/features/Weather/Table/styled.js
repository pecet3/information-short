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
    border: 2px solid ${({ theme }) => theme.elements.background};
    padding: 10px;
    text-align: center;
`
export const StyledTitle = styled.h2`
    text-align:center;
    margin-top: 0;
`
export const Tr = styled.tr`
    &:nth-child(even){
        background-color: ${({ theme }) => theme.elements.tableRow};
        color: ${({ theme }) => theme.elements.textImportant};
    }
`;
export const Th = styled(Td)`
    color: ${({ theme }) => theme.elements.textImportant};
    padding: 10px;
    background-color: ${({ theme }) => theme.elements.tableTh};
`;