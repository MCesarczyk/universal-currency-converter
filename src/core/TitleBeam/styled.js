import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    min-height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    max-width: ${({ theme }) => theme.breakpoint.xxl};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: column;
        padding: 16px;
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