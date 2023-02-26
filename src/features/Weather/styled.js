import styled from "styled-components";

export const MinorChartsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px){
        flex-direction: column;
    }
`;