import styled from "styled-components";
export const Wrapper = styled.div`
    height: 100%;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 70%;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: 0;
    }

`;

export const Title = styled.h2`

`;

export const Subtitle = styled.h3`
`;

export const Text = styled.p`

`;

export const Icon = styled.img`
    height: 72px;
    width: auto;
`;

export const Spinner = styled.img`
    margin: 0;
    height: 100px;
    width: auto;
  
`;