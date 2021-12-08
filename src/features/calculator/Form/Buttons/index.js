import { ButtonsContainer } from "./styled";
import { Button } from "../../../../common/Button";

const Buttons = ({ languages, language }) => (
    <ButtonsContainer>
        <Button>
            {languages[language].mainButtonLabel}
        </Button>
        <Button reset type="reset">
            {languages[language].resetButtonLabel}
        </Button>
    </ButtonsContainer>
);

export default Buttons;