import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    min-height: 100px;
    border-radius: 20px;
    padding: 16px 32px;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        min-height: 128px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        padding: 16px;
    }
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    padding: 8px 24px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
    width: 200px;
`;