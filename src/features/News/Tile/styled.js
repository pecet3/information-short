import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.elements.tile};
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: ${({ theme }) => theme.props.borderRadius}px;
`;
export const Header = styled.div`
    display: flex;
`;
export const TitleWrapper = styled.div`
`;
export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
    color:${({ theme }) => theme.elements.textImportant};
`;
export const Image = styled.img`
    width: 200px;
    height: auto;
    margin-right: 10px;
    flex-basis: 1;
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