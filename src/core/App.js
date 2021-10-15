import Container from "./Container";
import Form from "./Form";
import Switcher from "./Switcher";
import languages from "./languages";
import { useLocalStorageState } from "./useLocalStorageState";

const App = () => {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  document.title = languages[language].headerTitle;

  return (
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
  );
}

export default App;