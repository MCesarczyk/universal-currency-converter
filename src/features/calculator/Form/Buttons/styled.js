import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
            flex-direction: column;
            align-items: center;
    }
`;