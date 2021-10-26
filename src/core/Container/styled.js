import styled from "styled-components";
import background from "../../assets/images/background.png";

export const ContainerWrapper = styled.div`
    background-image: url("${background}");
    background-size: contain;
    background-position: center;
    background-attachment: scroll;
    background-color: ${({ theme }) => theme.color.background};
    max-width: ${({ theme }) => theme.breakpoint.xl};
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerElement = styled.div`
    padding: 12px 24px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.color.innerContainerBackground};

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
        padding: 12px;
        width: 100%;
    }
`;