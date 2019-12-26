import * as React from 'react';
import { COLORS, countTicketByStatus } from '@src/configs';
import { Container } from './scale.styled';
import { DefaultCol } from '../tickets/tickets.styled';

type IScaleButtonProps = {
  meta: any;
  scale: boolean;
  setScale: (v: boolean) => void;
  selected: any;
  tickets: any[];
};

const ScaleButton = ({
  selected,
  tickets,
  scale,
  setScale,
  meta,
}: IScaleButtonProps) => {
  const totalPicked: number = React.useMemo(
    countTicketByStatus.bind(null, tickets, 'isPicked'),
    [tickets]
  );
  return (
    <Container>
      <button onClick={() => setScale(!scale)}>zoom {scale ? '-' : '+'}</button>
      <ul>
        <li>
          Đã chọn:
          <DefaultCol background={COLORS.isPicked}>{totalPicked}</DefaultCol>
        </li>
        <li>
          Đang chọn:{' '}
          <DefaultCol background={COLORS.selected}>{selected.total}</DefaultCol>
        </li>
        <li>
          Trống:{' '}
          <DefaultCol style={{ color: 'black' }}>
            {meta.total - totalPicked}
          </DefaultCol>
        </li>
      </ul>
    </Container>
  );
};
export default React.memo(ScaleButton);
