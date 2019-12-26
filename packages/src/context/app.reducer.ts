import { appEnums } from './app.types';
export default function(state: any, action: any) {
  if (action.type === appEnums.APPLY_TICKETS) {
    const tickets = [...state.tickets];
    action.payload.forEach((item: string) => {
      const [i, j] = item.split('_');
      tickets[i][j] = { ...tickets[i][j], isPicked: true };
    });
    return { ...state, tickets };
  }
  return state;
}
