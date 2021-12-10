import { Button, LanguageButtons } from "./styled";
import flagPL from "../../../assets/images/flagPL.png";
import flagEN from "../../../assets/images/flagUS.png";

const Switcher = ({ languages, setLanguage }) => {

    const onLanguageChange = ({ target }) => {
        setLanguage(target.value);
    };

    return (
        <LanguageButtons>
            {Object.keys(languages).map((lang) => (
                <Button
                    key={lang}
                    value={lang}
                    onClick={onLanguageChange}
                    style={{ backgroundImage: `url(${lang === 'PL' ? flagPL : flagEN})`, width: "32px", height: "24px" }}
                >
                </Button>
            ))}
        </LanguageButtons>
    )
};

export default Switcher;