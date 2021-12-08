import Container from "./Container";
import Form from "../features/calculator/Form";
import Switcher from "../features/languages/Switcher";
import languages from "../features/languages/languages";
import { useLocalStorageState } from "../utils/useLocalStorageState";
import TitleBeam from "./TitleBeam";

const App = () => {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  return (
    <>
      <TitleBeam />
      <Container>
        <Switcher
          languages={languages}
          language={language}
          setLanguage={setLanguage}
        />
        <Form
          languages={languages}
          language={language}
          headerTitle={languages[language].headerTitle}
          inputLabel={languages[language].inputLabel}
          listTitle={languages[language].listTitle}
          resultTitle={languages[language].resultTitle}
          resultLabel={languages[language].resultLabel}
        />
      </Container>
    </>
  );
}

export default App;