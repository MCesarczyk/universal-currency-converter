import { ButtonsContainer } from "./styled";
import { Button } from "../../../../common/Button";

const Buttons = ({ languages, language, onButtonClick }) => (
    <ButtonsContainer>
        <Button
            onClick={onButtonClick}
        >
            {languages[language].mainButtonLabel}
        </Button>
        <Button reset type="reset">
            {languages[language].resetButtonLabel}
        </Button>
    </ButtonsContainer>
);

export default Buttons;