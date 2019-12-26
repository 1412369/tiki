import * as React from 'react';

import { appEnums } from './app.types';
import appState from './app.reducer';

export const AppContext = React.createContext<any>({});

export const AppProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(
    appState,
    props.defaultState || {}
  );
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const actions = {
    applyTickets: (payload: any) =>
      dispatch({ type: appEnums.APPLY_TICKETS, payload }),
  };
  return [state, actions];
};
