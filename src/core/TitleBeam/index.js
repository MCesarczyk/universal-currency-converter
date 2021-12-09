import Clock from "../../features/clock/Clock";
import Switcher from "../../features/languages/Switcher";
import { Title } from "../../common/Title";
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