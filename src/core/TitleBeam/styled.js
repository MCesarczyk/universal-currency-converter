import styled from "styled-components";

export const StyledBeam = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    padding: 16px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: column;
    }
`;

export const ExtraWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: row;
    }
`;