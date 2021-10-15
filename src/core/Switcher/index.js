import { LanguageButtons } from "./styled";

const Switcher = ({ languages, setLanguage }) => {

    const onLanguageChange = ({ target }) => {
        setLanguage(target.value);
    };

    return (
        <LanguageButtons>
            {Object.keys(languages).map((key) => (
                <button
                    key={key}
                    value={key}
                    onClick={onLanguageChange}
                >
                    {key}
                </button>
            ))}
        </LanguageButtons>
    )
};

export default Switcher;