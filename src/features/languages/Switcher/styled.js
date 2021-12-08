import styled from "styled-components";

export const LanguageButtons = styled.div`
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        margin-left: 8px;
    }
`;