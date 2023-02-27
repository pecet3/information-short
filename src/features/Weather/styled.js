import styled from "styled-components";

export const MinorChartsContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow-x: auto;
    @media (max-width:${({ theme }) => theme.breakpoints.large}px){
        flex-direction: column;
    }
`;