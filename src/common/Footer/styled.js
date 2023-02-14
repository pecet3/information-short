import styled from "styled-components";

export const Wrapper = styled.footer`
    margin: 10px auto;
    font-size: 14px;
    background-color: ${({ theme }) => theme.elements.headerBackground};
`;

export const Content = styled.p`
    padding: 6px;
    color: ${({ theme }) => theme.elements.text};
`;