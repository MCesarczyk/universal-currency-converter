import styled from 'styled-components';

interface ContentWrapperProps {
  $vertical?: boolean;
  $direction?: string;
}

export const ContentWrapper = styled.label.attrs<ContentWrapperProps>(
  (props) => ({
    type: 'text',
    $direction: props.$vertical ? 'column' : 'row',
  })
)<ContentWrapperProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
