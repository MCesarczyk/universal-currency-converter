import styled from "styled-components";

export const Title = styled.h1`
    display: inline-block;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        font-size: 28px;
        margin-bottom: 16px;
    }
`;