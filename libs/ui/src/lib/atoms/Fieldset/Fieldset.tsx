import { ReactNode } from "react";
import styled from "styled-components";

interface FieldsetProps {
    title: string;
    children: ReactNode;
}

export const Fieldset = ({ title, children }:FieldsetProps) => (
    <StyledFieldset>
        <Legend>{title}</Legend>
        {children}
    </StyledFieldset>
);

const StyledFieldset = styled.fieldset`
    min-height: 100px;
    border-radius: 20px;
    padding: 16px 32px;
    margin-bottom: 10px;
    min-height: 128px;
`;

const Legend = styled.legend`
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    padding: 8px 24px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
    width: 200px;
`;