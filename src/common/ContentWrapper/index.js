import styled from "styled-components";

export const ContentWrapper = styled.label.attrs(props => ({
    type: "text",
    direction: props.vertical ? "column" : "row",
}))`
    display: flex;
    flex-direction: ${props => props.direction};
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        flex-direction: column;
    }
`;