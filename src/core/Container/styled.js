import styled from "styled-components";

export const ContainerWrapper = styled.div`
    background-color: transparent;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerElement = styled.div`
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