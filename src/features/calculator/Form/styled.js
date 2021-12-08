import styled from "styled-components";

export const Fieldset = styled.fieldset`
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

export const LabelText = styled.span`
    display: block;
    min-width: 125px;
`;

export const FormInput = styled.input`
    width: 100%;
    border-radius: 8px;
    height: 32px;
    padding-left: 8px;
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
    min-height: 13px;
`;