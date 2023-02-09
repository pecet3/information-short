import styled from "styled-components";

export const BigImage = styled.img`
    width: 100%;
    height: auto;
    border: 2px solid ${({ theme }) => theme.elements.text};
    border-radius: 10px;
    margin-bottom: 50%;
`;