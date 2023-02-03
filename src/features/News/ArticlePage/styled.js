import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.header`

`;

export const Title = styled.h2`
    margin: 5px 0 10px 0;
    color: ${({ theme }) => theme.elements.textImportant};
`;

export const Date = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 100;

`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Content = styled.p`

`;

export const Source = styled.a`
    
`;

