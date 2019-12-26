import * as React from 'react';
import { currencyFormat } from '@src/configs';
import { COLORS } from '@src/configs';
import { Container } from './status.styled';
type IStatusProps = { meta: any };
const Status = ({ meta }: IStatusProps) => {
  const { types, ...rest } = meta;
  return (
    <Container>
      <ul>
        {types.map((item: string) => {
          return (
            <li style={{ color: COLORS[item].default }}>
              {item}: {currencyFormat.format(rest[item].price)}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default React.memo(Status);
