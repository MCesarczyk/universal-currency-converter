import styled from 'styled-components';
import { Clock, Title } from '@ui';
import { LanguageKeys, Languages } from '../../features/languages/types';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface TitleBeamProps {
  languages: Languages;
  language: LanguageKeys;
  setLanguage: (language: string) => void;
}

export const TitleBeam = ({
  languages,
  language,
  setLanguage,
}: TitleBeamProps) => (
  <StyledBeam>
    <Wrapper>
      <Title>{languages[language].headerTitle}</Title>
      <ExtraWrapper>
        <Clock label={languages[language].clockLabel} language={language} />
        <LanguageSwitcher
          languages={languages}
          setLanguage={setLanguage}
        />
      </ExtraWrapper>
    </Wrapper>
  </StyledBeam>
);

const StyledBeam = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.color.elementsText};
  background-color: ${({ theme }) => theme.color.elementsBackground};
  min-height: 80px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  max-width: ${({ theme }) => theme.breakpoint.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    padding: 16px;
  }
`;

const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: row;
    margin-bottom: 16px;
  }
`;
