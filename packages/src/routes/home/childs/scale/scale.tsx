import * as React from 'react';
import { Container } from './scale.styled';
type IScaleButtonProps = {
  scale: boolean;
  setScale: (v: boolean) => void;
};
const ScaleButton = ({ scale, setScale }: IScaleButtonProps) => {
  return (
    <Container>
      <button onClick={() => setScale(!scale)}>zoom {scale ? '-' : '+'}</button>
    </Container>
  );
};
export default ScaleButton;
