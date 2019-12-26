import * as React from 'react';
import { Container } from './payActions.styled';

type IPayActionProps = {
  onPaymentClick: () => void;
};
const PayAction = (props: IPayActionProps) => {
  return (
    <Container>
      <button
        onClick={() => {
          alert(
            'Chúng tôi đang phát triển tính năng này! Xin lỗi vì sự chậm trễ '
          );
        }}>
        Combo
      </button>
      <button onClick={props.onPaymentClick}>Thanh toán</button>
    </Container>
  );
};
export default React.memo(PayAction);
