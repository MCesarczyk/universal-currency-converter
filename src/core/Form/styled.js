import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 20px;
    padding: 12px 24px;
    margin-bottom: 10px;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    padding: 8px 24px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
`;

export const LabelText = styled.span`
    display: block;
    min-width: 150px;
`;

export const FormInput = styled.input`
    width: 50%;
    text-align: center;
    border-radius: 5px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        width: 80%;
    }
`;

export const FormSelect = styled.select`
    width: 80%;
    border-radius: 5px;
    height: 24px;
`;

export const FormAnnotation = styled.p`
    font-size: 12px;
    text-align: right;
`;