import styled from "styled-components";

export const LanguageButtons = styled.div`
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        margin-left: 8px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    background-position: center;
    border: none;
    margin: 2px;
    border-radius: 2px;
`;