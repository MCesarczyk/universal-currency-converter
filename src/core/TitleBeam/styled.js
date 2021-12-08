import styled from "styled-components";

export const StyledBeam = styled.header`
    display: flex;
    width: 100%;
    color: ${({ theme }) => theme.color.elementsText};
    background-color: ${({ theme }) => theme.color.elementsBackground};
    padding: 16px 24px;
`;