import styled from "styled-components";
import background from "../../assets/images/background.png";

export const ContainerBody = styled.div`
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.color.background};
    background-attachment: fixed;
`;

export const ContainerElement = styled.div`
    max-width: 360px;
    min-width: 240px;
    margin: 0 auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.innerContainerBackground};
`;