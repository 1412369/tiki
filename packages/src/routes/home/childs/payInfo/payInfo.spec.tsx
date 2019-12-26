import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PayInfo from './payInfo';
describe('snapshot PayInfo', function() {
  it('Should render PayInfo without crashing', function() {
    const wrapper = renderer.create(
      <PayInfo
        location={{
          name: 'CGV Su Van Hanh',
          start: '9:00',
          end: '10:00',
        }}
        calculatePrice="120,000 đ"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
