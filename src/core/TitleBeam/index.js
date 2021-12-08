import Clock from "../../features/clock/Clock";
import Switcher from "../../features/languages/Switcher";
import { Title } from "../../common/Title";
import { ExtraWrapper, StyledBeam } from "./styled";

const TitleBeam = ({ title, languages, language, setLanguage }) => (
    <StyledBeam>
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
    </StyledBeam>
);

export default TitleBeam;