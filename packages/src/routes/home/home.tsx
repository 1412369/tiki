import * as React from 'react';
import { PayInfo, PayAction, ScaleButton, Status, Tickets } from './childs';
import { HomeContainer, MovieTitle } from './home.styled';
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
  const calculatePrice = React.useMemo(
    () => {
      return Object.keys(selected.tickets).reduce((results, item) => {
        const ticket = selected.tickets[item];
        console.log(ticket, item, selected);
        if (ticket) {
          return results + meta[ticket.type].price;
        }
        return results;
      }, 0);
    },
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
      <MovieTitle>
        <h2>Mắt biếc</h2>
      </MovieTitle>
      <Tickets
        {...{
          onTicketSelect,
          scale,
          tickets,
          selected,
        }}
      />
      <ScaleButton scale={scale} setScale={setScale} />
      <Status meta={meta} />
      <PayInfo location={location} calculatePrice={calculatePrice} />
      <PayAction
        onPaymentClick={() => {
          const result = actions.applyTickets(Object.keys(selected.tickets));
          console.log('results', result);
        }}
      />
    </HomeContainer>
  );
};
export default Home;
