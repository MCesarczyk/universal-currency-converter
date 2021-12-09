import Container from "./Container";
import Form from "../features/calculator/Form";
import languages from "../features/languages/languages";
import { useLocalStorageState } from "../utils/useLocalStorageState";
import TitleBeam from "./TitleBeam";

const App = () => {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  return (
    <>
      <TitleBeam
        languages={languages}
        language={language}
        setLanguage={setLanguage}
        title={languages[language].headerTitle}
      />
      <Container>
        <Form
          languages={languages}
          language={language}
          currentTitle={languages[language].currentTitle}
          inputLabel={languages[language].inputLabel}
          targetTitle={languages[language].targetTitle}
          resultTitle={languages[language].resultTitle}
          resultLabel={languages[language].resultLabel}
        />
      </Container>
    </>
  );
}

export default App;