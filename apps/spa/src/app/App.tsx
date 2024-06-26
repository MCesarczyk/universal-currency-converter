import { useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from '@theme';
import { TitleBeam } from '../components/TitleBeam';
import { Form } from '../components/Form/Form';
import { languages } from '../features/languages/data';
import { LanguageKeys } from '../features/languages/types';
import { clearCacheData } from '../utils/clearCacheData';
import { useLocalStorageState } from '../utils/useLocalStorageState';
import { useCurrentRates } from '../features/rates/useCurrentRates';

export const App = () => {
  const [language, setLanguage] = useLocalStorageState('language', 'EN');

  document.title = languages[language as LanguageKeys].headerTitle;

  useEffect(() => {
    clearCacheData();
  }, []);

  const { getCurrentRates, ratesData } = useCurrentRates();

  return (
    <Theme>
      <Wrapper>
        <TitleBeam
          languages={languages}
          language={language as LanguageKeys}
          setLanguage={setLanguage}
        />
        <Wrapper>
          <Form
            languages={languages}
            language={language as LanguageKeys}
            ratesData={ratesData}
            getCurrentRates={getCurrentRates}
          />
        </Wrapper>
      </Wrapper>
    </Theme>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
