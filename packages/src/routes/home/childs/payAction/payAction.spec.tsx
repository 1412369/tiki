import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PayAction from './payAction';
describe('snapshot PayAction', function() {
  it('Should render Payction without crashing', function() {
    const wrapper = renderer.create(<PayAction onPaymentClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
