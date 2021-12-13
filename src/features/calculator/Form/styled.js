import styled from "styled-components";

export const StyledForm = styled.form`
    margin: auto;
    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.color.innerContainerBackground};
    width: ${({ theme }) => theme.breakpoint.md};

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        padding: 12px;
    }
`;