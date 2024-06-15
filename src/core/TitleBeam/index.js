import Clock from "../../features/clock/Clock";
import Switcher from "../../../libs/ui/src/lib/molecules/LanguageSwitcher/LanguageSwitcher";
import { Title } from "../../../libs/ui/src/lib/atoms/Title/Title";
import { ExtraWrapper, StyledBeam, Wrapper } from "./styled";

const TitleBeam = ({ title, languages, language, setLanguage }) => (
    <StyledBeam>
        <Wrapper>
            <Title>
                {title}
            </Title>
            <ExtraWrapper>
                <Clock
                    languages={languages}
                    language={language}
                />
                <Switcher
                    languages={languages}
                    language={language}
                    setLanguage={setLanguage}
                />
            </ExtraWrapper>
        </Wrapper>
    </StyledBeam>
);

export default TitleBeam;