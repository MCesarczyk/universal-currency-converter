import { useEffect } from "react";
import { useLocalStorageState } from "../../utils/useLocalStorageState";
import { clearCacheData } from "../../utils/clearCacheData";
import languages from "../../assets/data/languages";
import StyledForm from "../../features/calculator/Form";
import TitleBeam from "../TitleBeam";
import { Wrapper } from "../../common/Wrapper";
import Theme from "../Theme";

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