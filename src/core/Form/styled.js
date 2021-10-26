import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 20px;
    padding: 16px 32px;
    margin-bottom: 10px;

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

export const LabelText = styled.span`
    display: block;
    min-width: 150px;
`;

export const FormInput = styled.input`
    width: 50%;
    border-radius: 8px;
    height: 32px;
    padding-left: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        width: 100%;
    }
`;

export const FormSelect = styled.select`
    width: 100%;
    border-radius: 8px;
    height: 32px;
    padding-left: 8px;
`;

export const FormAnnotation = styled.p`
    font-size: 12px;
    text-align: right;
`;