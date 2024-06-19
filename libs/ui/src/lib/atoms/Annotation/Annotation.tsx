import styled from 'styled-components';
interface AnnotationProps {
  text: string;
}

export const Annotation = ({ text }: AnnotationProps) => (
  <StyledAnnotation>{text}</StyledAnnotation>
);

const StyledAnnotation = styled.p`
  font-size: 12px;
  text-align: right;
  min-height: 13px;
`;
