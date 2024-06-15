import styled from "styled-components";
import { Button } from "../../atoms/Button";

interface FormButtonsProps {
    mainButtonLabel: string;
    resetButtonLabel: string;
    onButtonClick: () => void;
}

export const FormButtons = ({ mainButtonLabel, resetButtonLabel, onButtonClick }:FormButtonsProps) => (
    <ButtonsContainer>
        <Button
            onClick={onButtonClick}
        >
            {mainButtonLabel}
        </Button>
        <Button reset type="reset">
            {resetButtonLabel}
        </Button>
    </ButtonsContainer>
);

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
            flex-direction: column;
            align-items: center;
    }
`;
