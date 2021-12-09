import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin: 0 auto;
    height: 100%;
`;

export const ContainerElement = styled.div`
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