import styled from "styled-components";

interface ContentWrapperProps {
    vertical?: boolean;
}

export const ContentWrapper = styled.label.attrs((props: ContentWrapperProps) => ({
    type: "text",
    direction: props.vertical ? "column" : "row",
}))`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
