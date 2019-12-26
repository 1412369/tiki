export * from './styled';
export * from './message';
export const API_OFFSET: number = 10;
export const APP_HELMET = {
  title:
    'Vé hòa nhạc, vé hội thảo, vé sự kiện, vé thể thao ở Việt Nam | TicketBox',
  image: 'https://static.ticketbox.vn/images-v2/TKB-FBthumb.jpg',
  description:
    'TicketBox là hệ thống phân phối vé và quản lý sự kiện trực tuyến, giúp bạn bán và mua vé các sự kiện thật dễ dàng.',
  url: 'https://ticketbox.vn',
};
export const COLORS = {
  vip: {
    default: '#008e00',
  },
  deluxe: {
    default: '#f76f6f',
  },
  standard: {
    default: '#464646',
  },
  selected: '#ea8383',
  hover: '#b9b9b9',
  isPicked: '#8e8e8e',
};

export const currencyFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
