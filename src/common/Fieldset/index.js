import { Legend, StyledFieldset } from "./styled"

const Fieldset = ({ title, children }) => (
    <StyledFieldset>
        <Legend>{title}</Legend>
        {children}
    </StyledFieldset>
);

export default Fieldset;