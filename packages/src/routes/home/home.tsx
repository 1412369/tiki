import * as React from 'react';
import { PayInfo, PayAction, ScaleButton, Status, Tickets } from './childs';
import { HomeContainer, MovieTitle } from './home.styled';
import { useAppContext } from '../../context/app.context';
import { currencyFormat, calculatePrice } from '@src/configs';
import { WithErrorBound } from './home.enhance';
type IHomeProps = {};
const Home = (_: IHomeProps) => {
  const [state, actions] = useAppContext();
  const [selected, setSelected]: [any, any] = React.useState({
    total: 0,
    tickets: {},
  });
  const [scale, setScale] = React.useState(false);
  const { tickets, meta, location } = state;
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
          return alert('max tickets pick');
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
        />
        <Status meta={meta} />
        <PayInfo
          location={location}
          calculatePrice={currencyFormat.format(calculatedPrice)}
        />
        <PayAction
          onPaymentClick={() => {
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
