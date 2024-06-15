import { MouseEvent } from 'react';
import styled from 'styled-components';
import { LanguageKeys, Languages } from '../../features/languages/types';

interface LanguageSwitcherProps {
  languages: Languages;
  setLanguage: (lang: LanguageKeys) => void;
}

export const LanguageSwitcher = ({
  languages,
  setLanguage,
}: LanguageSwitcherProps) => {
  const onLanguageChange = (event: MouseEvent<HTMLButtonElement>) => {
    setLanguage(event.currentTarget.value as LanguageKeys);
  };

  return (
    <LanguageButtons>
      {Object.entries(languages).map((lang) => (
        <Button key={lang[0]} value={lang[0]} onClick={onLanguageChange}>
          {lang[1].flag}
        </Button>
      ))}
    </LanguageButtons>
  );
};

const LanguageButtons = styled.div`
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-left: 8px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  background-position: center;
  border: none;
  margin: 2px;
  border-radius: 2px;
  font-size: 24px;
  width: 32px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(105%);
  }
`;
