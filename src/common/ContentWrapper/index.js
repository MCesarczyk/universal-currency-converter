import styled from "styled-components";

export const ContentWrapper = styled.label.attrs(props => ({
    type: "text",
    direction: props.vertical ? "column" : "row",
}))`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.direction};
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;