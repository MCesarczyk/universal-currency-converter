import { ContainerBody, ContainerElement } from "./styled";

const Container = ({ children }) => (
    <ContainerBody>
        <ContainerElement>
            {children}
        </ContainerElement>
    </ContainerBody>
);

export default Container;