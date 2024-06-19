import styled from 'styled-components';
import { useCurrentDate } from './useCurrentDate';

interface ClockProps {
  label: string;
  language: string;
}

export const Clock = ({ label, language }: ClockProps) => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      <ClockElement>
        <ClockLabel>
          {label}{' '}
          {date.toLocaleString(language, {
            weekday: 'long',
          })}
        </ClockLabel>
        {date.toLocaleString(language, {
          day: 'numeric',
          month: 'long',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </ClockElement>
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const ClockElement = styled.p`
  font-family: monospace;
  font-size: 12px;
  margin: 0 0 8px 0;
  text-align: center;
`;

const ClockLabel = styled.span`
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
