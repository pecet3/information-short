import styled from "styled-components";

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    word-break: break-word;
`;
export const Header = styled.header`

`;

export const Title = styled.h2`
    margin: 5px 0 5px 0;
    color: ${({ theme }) => theme.elements.textImportant};
    font-size: 24px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 20px;
    }
`;

export const Date = styled.p`
    margin: 0 0 20px 0;
    font-size: 14px;
    font-weight: 100;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 12px;
    }

`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Content = styled.p`
    line-height: 1.8;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
            font-size: 16px;
        }
`;

export const Source = styled.a`
    color: ${({ theme }) => theme.elements.text + 80};
`;

