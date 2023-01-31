import styled from "styled-components";

export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.elements.navigationBackground};
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 5px 5px 5px 20px;
    gap: 10px;
`;

export const Li = styled.li`
    text-decoration: none;
    color: white;
`;