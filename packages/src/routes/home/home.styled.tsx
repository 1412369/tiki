import styled from 'styled-components';
import { COLORS } from '@src/configs';
export const HomeContainer = styled.div`
  width: 500px;
  margin: auto;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  span {
    padding: 5px 20px 0 0;
    font-weight: bold;
    font-size: 14px;
  }
`;
const DefaultCol = styled.div<{ scale: boolean }>`
  margin: 2px;
  width: ${(p) => (p.scale ? `40px` : '20px')};
  height: ${(p) => (p.scale ? `40px` : '20px')};
  text-align: center;
  border-radius: 50%;
  border: 1px solid #8e8e8e;
  cursor: pointer;
  font-size: ${(p) => (p.scale ? `15px` : '10px')};
  line-height: ${(p) => (p.scale ? `35px` : '20px')};
  word-spacing: -3px;
`;
export const ColPicked = styled(DefaultCol)`
  background: #8e8e8e;
`;
export const Col = styled(DefaultCol)<{ type: string; selected: boolean }>`
  background:${({ selected }) => (selected ? COLORS.selected : '#fff')}
  border: ${({ type, selected }) =>
    `1px solid ${selected ? COLORS.selected : COLORS[type].default}`};
  :hover {
background:${(p) => (p.selected ? COLORS.selected : COLORS.hover)};
  }
`;

export const TicketStatus = styled.div`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    li {
      padding: 0 20px;
      text-transform: capitalize;
    }
  }
`;

export const TicketWrapper = styled.div<{ scale: boolean }>`
  width: ${(p) => (p.scale ? `500px` : '350px')};
  height: ${(p) => (p.scale ? `350px` : '250px')};
  margin: 50px auto 10px;
  overflow: auto;
`;
export const MovieTitle = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
  height: 100px;
  background: #a7c4d0;
  h2 {
    padding-top: 30px;
  }
`;
export const PaymentInfo = styled.div`
  display: flex;
  .movie-time {
    padding-left: 20px;
    width: 50%;
    > :nth-child(2) {
      display: block;
    }
  }
  .movie-total {
    width: 50%;
    text-align: right;
    padding-right: 50px;
  }
`;
export const PaymentActions = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0 20px;
    width: 120px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    background: #bbb;
    cursor: pointer;
    :hover {
      background: #8e8e8e;
    }
  }
`;
export const ScaleButton = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
`;
