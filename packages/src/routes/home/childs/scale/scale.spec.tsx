import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { countTicketByStatus } from '../../../../configs';
import { generateEmptyMap } from '../../../../../../server/configs';
import Scale from './scale';
let picked = [1, 2, 3, 4, 7, 8, 20, 21, 22, 23];
let tickets: any = generateEmptyMap({
  row: 6,
  col: 6,
  vip: [10, 20],
  deluxe: [21, 29],
  picked,
});
const meta = {
  total: 36,
  types: ['standard', 'vip', 'deluxe'],
  standard: { price: 10000 },
  vip: { price: 12000 },
  deluxe: { price: 15000 },
};
const selected = {
  tickets: {
    0_0: { type: 'vip' },
    0_1: { type: 'vip' },
    0_2: { type: 'vip' },
  },
};
describe('countTicketByStatus', function() {
  it('count::isPicked', function() {
    expect(countTicketByStatus(tickets, 'isPicked')).toEqual(picked.length);
  });

  it('count::non status ticket', function() {
    expect(countTicketByStatus(tickets, 'test')).toEqual(0);
  });
});
describe('snapshot Scale', function() {
  it('Should render Scale without crashing', function() {
    const wrapper = renderer.create(
      <Scale
        scale={false}
        setScale={() => {}}
        selected={selected}
        meta={meta}
        tickets={tickets}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
