import { currencyFormat, calculatePrice } from '@src/configs';
import * as React from 'react';

import { AppHelmet } from '../../components';
import { HomeContainer, MovieTitle } from './home.styled';
import { PayInfo, PayAction, ScaleButton, Status, Tickets } from './childs';
import { WithErrorBound } from './home.enhance';
import { useAppContext } from '../../context/app.context';

type IHomeProps = {};
const Home = (_: IHomeProps) => {
  const [state, actions] = useAppContext();
  const [selected, setSelected]: [any, any] = React.useState({
    total: 0,
    tickets: {},
  });
  const [scale, setScale] = React.useState(false);
  const { tickets, meta, location } = state;
  const resetSelected = () => {
    setSelected({ total: 0, tickets: {} });
  };
  const onTicketSelect = React.useCallback(
    (i, j) => {
      if (selected.tickets[`${i}_${j}`]) {
        setSelected({
          ...selected,
          tickets: {
            ...selected.tickets,
            [`${i}_${j}`]: null,
          },
          total: selected.total - 1,
        });
      } else {
        if (selected.total === 6) {
          return alert('Chỉ được mua tối đa 6 vé ');
        }
        setSelected({
          ...selected,
          tickets: {
            ...selected.tickets,
            [`${i}_${j}`]: tickets[i][j],
          },
          total: selected.total + 1,
        });
      }
    },
    [selected, state]
  );
  const calculatedPrice: number = React.useMemo(
    calculatePrice.bind(null, selected, meta),
    [selected]
  );
  React.useEffect(
    () => {
      setSelected({
        total: 0,
        tickets: {},
      });
    },
    [state.tickets]
  );
  return (
    <HomeContainer>
      <AppHelmet />
      <WithErrorBound>
        <MovieTitle>
          <h2>{meta.film}</h2>
        </MovieTitle>
        <Tickets
          {...{
            onTicketSelect,
            scale,
            tickets,
            selected,
          }}
        />
        <ScaleButton
          scale={scale}
          setScale={setScale}
          selected={selected}
          meta={meta}
          tickets={tickets}
          resetSelected={resetSelected}
        />
        <Status meta={meta} />
        <PayInfo
          location={location}
          calculatePrice={currencyFormat.format(calculatedPrice)}
        />
        <PayAction
          onPaymentClick={() => {
            if (selected.total === 0) {
              return alert('Vui lòng chọn vé trước khi thanh toán');
            }
            actions.applyTickets(
              Object.keys(selected.tickets).filter(
                (item: string) => selected.tickets[item]
              )
            );
          }}
        />
      </WithErrorBound>
    </HomeContainer>
  );
};
export default Home;
