import { ContainerWrapper, ContainerElement } from "./styled";

const Container = ({ children }) => (
    <ContainerWrapper>
        <ContainerElement>
            {children}
        </ContainerElement>
    </ContainerWrapper>
);

export default Container;