import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elements.tile};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;

    ${({ noRender }) => noRender && css`
        display: none;
    `}
`;
export const Header = styled.div`
    display: flex;

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        flex-direction: column;
    }

`;
export const TitleWrapper = styled.div`
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
    color:${({ theme }) => theme.elements.textImportant};

    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        margin-top: 10px;
    }
`;
export const Image = styled.img`
    width: 200px;
    height: auto;
    margin-right: 10px;
    flex-basis: 1;
    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        width: 100%;
    }
`;
export const Date = styled.p`
    font-size: 12px;
    margin: 5px 0 10px 0;
    font-weight: 100;
`;
export const Description = styled.p`
    font-size: 14px;
    margin: 10px 0 0 0;
`;