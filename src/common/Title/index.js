import styled from "styled-components";

export const Title = styled.h1`
    display: inline-block;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        font-size: 24px;
        margin-bottom: 16px;
    }
`;