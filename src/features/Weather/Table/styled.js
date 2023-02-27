import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    max-width: 100%;
    overflow-x: auto;
`;

export const StyledTable = styled.table`
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    margin: 20px auto;

    ${({ noRender }) => noRender && css`
        display: none;
    `}
`
export const Td = styled.td`
    border: 2px solid ${({ theme }) => theme.elements.background};
    padding: 10px;
    text-align: center;

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        padding: 2px;
    }
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

    @media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        padding: 4px;
    }
`;