import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
            flex-direction: column;
            align-items: center;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px 10px;
    width: 45%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        width: 100%;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;