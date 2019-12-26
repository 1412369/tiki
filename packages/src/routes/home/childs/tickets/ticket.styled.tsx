import styled from 'styled-components';
import { COLORS } from '@src/configs';

export const Container = styled.div<{ scale: boolean }>`
  width: ${(p) => (p.scale ? `500px` : '350px')};
  height: ${(p) => (p.scale ? `350px` : '250px')};
  margin: 50px auto 10px;
  overflow: auto;
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
