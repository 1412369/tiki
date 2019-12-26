import * as React from 'react';
import { currencyFormat, COLORS } from '@src/configs';
import { Container } from './status.styled';
type IStatusProps = { meta: any };
const Status = ({ meta }: IStatusProps) => {
  const { types, ...rest } = meta;
  return (
    <Container>
      <ul>
        {types.map((item: string) => {
          return (
            <li style={{ color: COLORS[item].default }} key={item}>
              {item}: {currencyFormat.format(rest[item].price)}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default React.memo(Status);
