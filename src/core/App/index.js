import { useEffect } from "react";
import styled from "styled-components";
import { useLocalStorageState } from "../../../apps/spa/src/utils/useLocalStorageState";
import { clearCacheData } from "../../../apps/spa/src/utils/clearCacheData";
import languages from "../../../apps/spa/src/features/languages/data";
import StyledForm from "../../features/calculator/Form";
import TitleBeam from "../../../apps/spa/src/components/TitleBeam/TitleBeam";
import { Wrapper } from "../../common/Wrapper";
import Theme from "../../../apps/spa/src/theme";

const App = () => {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  useEffect(() => {
    clearCacheData();
  }, []);

  return (
    <Theme>
      <Wrapper>
        <TitleBeam
          languages={languages}
          language={language}
          setLanguage={setLanguage}
          title={languages[language].headerTitle}
        />
        <Wrapper>
          <StyledForm
            languages={languages}
            language={language}
            currentTitle={languages[language].currentTitle}
            inputLabel={languages[language].inputLabel}
            targetTitle={languages[language].targetTitle}
            resultTitle={languages[language].resultTitle}
            resultLabel={languages[language].resultLabel}
          />
        </Wrapper>
      </Wrapper>
    </Theme>
  );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;