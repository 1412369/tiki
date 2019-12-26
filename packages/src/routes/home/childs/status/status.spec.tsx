import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Status from './status';
const meta = {
  total: 36,
  types: ['standard', 'vip', 'deluxe'],
  standard: { price: 10000 },
  vip: { price: 12000 },
  deluxe: { price: 15000 },
};
describe('snapshot Status', function() {
  it('Should render Status without crashing', function() {
    const wrapper = renderer.create(<Status meta={meta} />);
    expect(wrapper).toMatchSnapshot();
  });
});
