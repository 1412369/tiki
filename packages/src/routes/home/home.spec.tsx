import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { createStore, combineReducers } from 'redux';
import * as React from 'react';
import homeReducer from '@packages/src/routes/home/home.reducer';

import { homeEnums } from './home.types';
import Home from './home';

export const categories = [
  { id: 0, name: 'Popular', href: '/all-stores' },
  {
    id: 2,
    name: 'Dining',
    shortname: 'dining',
    priority: 1,
    href: '/all-stores/dining',
  },
  {
    id: 3,
    name: 'Electronics',
    shortname: 'electronics',
    priority: 3,
    href: '/all-stores/electronics',
  },
  {
    id: 7,
    name: 'Health & Beauty',
    shortname: 'health-beauty',
    priority: 7,
    href: '/all-stores/health-beauty',
  },
  {
    id: 8,
    name: 'Home & Living',
    shortname: 'home-living',
    priority: 8,
    href: '/all-stores/home-living',
  },
];
export const stores = [
  {
    categoryId: 0,
    alt: 'Shopee Coupons & Promo Codes',
    displayText: 'Up to 8.0% Cashback via ShopBack App',
    id: 1816,
    isSpecialStore: true,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1816/shopee.png',
    name: 'Shopee',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/shopee',
  },
  {
    categoryId: 2,
    alt: 'HungryGoWhere Reservations Coupons & Promo Codes',
    displayText: '$2.50 Cashback',
    id: 2474,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2474/2474_logo_75ff5700.png',
    name: 'HungryGoWhere Reservations',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/hungry-go-where',
  },
  {
    categoryId: 3,
    alt: 'GamersGate.com Coupons & Promo Codes',
    displayText: '6.0% Cashback',
    id: 440,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/440/440_logo_ffd71bf8.png',
    name: 'GamersGate.com',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/gamersgate-com',
  },
  {
    categoryId: 4,
    alt: 'Nike Coupons & Promo Codes',
    displayText: '15.0% Cashback',
    id: 1078,
    isSpecialStore: false,
    logoUrl:
      'https://static.shopback.com/uploads/merchant_logo/1078/nikelogo.png',
    name: 'Nike',
    oldDisplayText: 'Was 2.0%',
    oldPreviewText: 'Was 2.0%',
    shortname: '/nike',
  },
  {
    categoryId: 6,
    alt: 'PETCO Animal Supplies Coupons & Promo Codes',
    displayText: 'up to 6.0% Cashback',
    id: 1054,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1054/petco-animal-supplies-coupon.png',
    name: 'PETCO Animal Supplies',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/petco',
  },
  {
    categoryId: 7,
    alt: 'iShopChangi Coupons & Promo Codes',
    displayText: '$6 Cashback',
    id: 2402,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2402/2402_logo_e05ca15b.png',
    name: 'iShopChangi',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/ishopchangi',
  },
  {
    categoryId: 8,
    alt: 'Taobao Coupons & Promo Codes',
    displayText: 'Up to 10.0% Cash Rewards',
    id: 1012,
    isSpecialStore: true,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/1012/1012_logo_2ef6161b.png',
    name: 'Taobao',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/taobao',
  },
  {
    categoryId: 8,
    alt: 'TANGS.com Coupons & Promo Codes',
    displayText: '$2 Cashback ',
    id: 2536,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2536/2536_logo_c94d2d4d.jpg',
    name: 'TANGS.com',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/tangs',
  },
  {
    categoryId: 11,
    alt: 'ASMC - The Adventure Company Coupons & Promo Codes',
    displayText: '4.0% Cashback',
    id: 601,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/601/asmc-the-adventure-company-coupon.png',
    name: 'ASMC - The Adventure Company',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/asmc',
  },
  {
    categoryId: 12,
    alt: 'Lufthansa Coupons & Promo Codes',
    displayText: '1.0% Cashback',
    id: 2602,
    isSpecialStore: false,
    logoUrl:
      'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2602/2602_logo_f519b095.png',
    name: 'Lufthansa',
    oldDisplayText: '',
    oldPreviewText: '',
    shortname: '/lufthansa',
  },
];

export const changeCategory = {
  categoryId: 12,
  alt: 'Lufthansa Coupons & Promo Codes',
  displayText: '1.0% Cashback',
  id: 2602,
  isSpecialStore: false,
  logoUrl:
    'https://cloud.shopback.com/t_sd_250_pad,f_auto,fl_lossy,q_auto/sg-store/2602/2602_logo_f519b095.png',
  name: 'Lufthansa',
  oldDisplayText: '',
  oldPreviewText: '',
  shortname: '/lufthansa',
};
const reducers = combineReducers({
  home: homeReducer,
});
export const store = createStore(reducers, {});

describe('<Home />', () => {
  beforeEach(() => {
    store.dispatch({
      type: homeEnums.GET_DATA_SUCCESS,
      payload: { categories, stores },
    });
  });
  it('render Home', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
