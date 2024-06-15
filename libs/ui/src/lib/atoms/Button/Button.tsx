import styled from "styled-components";

export const Button = styled.button<{reset?: boolean}>`
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => props => props.reset ? theme.color.crimson : theme.color.emerald};
    border: none;
    display: inline-block;
    border-radius: 20px;
    padding: 8px 16px;
    margin: 5px 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        width: 100%;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;
