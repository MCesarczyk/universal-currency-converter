import styled from 'styled-components';
import { Button } from '../../atoms/Button';

interface FormButtonsProps {
  mainButtonLabel: string;
  resetButtonLabel: string;
  onMainButtonClick: () => void;
  onResetButtonClick: () => void;
}

export const FormButtons = ({
  mainButtonLabel,
  resetButtonLabel,
  onMainButtonClick,
  onResetButtonClick,
}: FormButtonsProps) => (
  <ButtonsContainer>
    <Button onClick={onMainButtonClick}>{mainButtonLabel}</Button>
    <Button reset onClick={onResetButtonClick}>
      {resetButtonLabel}
    </Button>
  </ButtonsContainer>
);

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    flex-direction: column;
    align-items: center;
  }
`;
