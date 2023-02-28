import styled, { css } from "styled-components";
import { ReactComponent as ListSvg } from "./list.svg";
import { ReactComponent as CrossSvg } from "./cross.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ListIcon = styled(ListSvg)`
    width: 28px;
    height: auto;
`;
export const CrossIcon = styled(CrossSvg)`
    width: 28px;
    height: auto;
`;
export const List = styled.ul`
    display: none;
    flex-direction: column;
    background-color: ${({ theme }) => theme.elements.navigationMobile};
    align-self: center;
    margin: 0;
    padding: 0 100%;

    ${({ display }) => display && css`
        display: flex;
    `}
`;

export const Button = styled.button`
    display: none;
    align-self: flex-end;
    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        display: block;
    }
`;