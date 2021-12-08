import styled from "styled-components";

export const ClockContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const ClockElement = styled.p`
    font-family: monospace;
    font-size: 12px;
    margin: 0 0 8px 0;
    text-align: center;
`;

export const ClockLabel = styled.span`
    margin-right: 8px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        display: none;
    }
`;