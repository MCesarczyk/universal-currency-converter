import styled from "styled-components";

interface LabelProps {
    text: string;
}

export const Label = ({ text }: LabelProps) => (
    <StyledLabel>
        {text}
    </StyledLabel>
);

const StyledLabel = styled.span`
    display: block;
    min-width: 125px;
`;
