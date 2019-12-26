import { calculatePrice } from '../../configs';
const tickets = {
  0_0: {
    type: 'vip',
  },
  0_1: {
    type: 'vip',
  },
};
const meta = {
  types: ['standard', 'vip', 'deluxe'],
  standard: {
    price: 10000,
  },
  vip: {
    price: 12000,
  },
  deluxe: {
    price: 15000,
  },
};
describe('calculatedPrice', function() {
  it('2*12000(vip)===24000', function() {
    expect(calculatePrice({ tickets }, meta)).toEqual(24000);
  });
  it('2*12000(vip) + 10000(standard)===34000', function() {
    expect(
      calculatePrice(
        {
          tickets: {
            ...tickets,
            0_2: { type: 'standard' },
          },
        },
        meta
      )
    ).toEqual(34000);
  });
  it('2*12000(vip) + 10000(standard)+15000(deluxe)===49000', function() {
    expect(
      calculatePrice(
        {
          tickets: {
            ...tickets,
            0_2: { type: 'standard' },
            0_3: { type: 'deluxe' },
          },
        },
        meta
      )
    ).toEqual(49000);
  });
});
