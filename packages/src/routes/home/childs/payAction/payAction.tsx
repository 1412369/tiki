import * as React from 'react';
import { Container } from './payActions.styled';

type IPayActionProps = {
  onPaymentClick: () => void;
};
const PayAction = (props: IPayActionProps) => {
  return (
    <Container>
      <button>Combo</button>
      <button onClick={props.onPaymentClick}>Thanh toán</button>
    </Container>
  );
};
export default React.memo(PayAction);
