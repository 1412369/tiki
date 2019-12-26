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
export const DefaultCol = styled.div<{ scale?: boolean; background?: string }>`
  margin: 2px;
  width: ${(p) => (p.scale ? `40px` : '20px')};
  height: ${(p) => (p.scale ? `40px` : '20px')};
  text-align: center;
  color: #fff;
  border-radius: 50%;
  border: 1px solid #8e8e8e;
  cursor: pointer;
  font-size: ${(p) => (p.scale ? `15px` : '10px')};
  line-height: ${(p) => (p.scale ? `35px` : '20px')};
  word-spacing: -3px;
  background: ${(p) => (p.background ? p.background : 'fff')};
`;
export const ColPicked = styled(DefaultCol)`
  background: ${COLORS.isPicked};
`;
export const Col = styled(DefaultCol)<{ type: string; isSelected: boolean }>`
  background:${({ isSelected }) => (isSelected ? COLORS.selected : '#fff')}
  border: ${({ type, isSelected }) =>
    `1px solid ${isSelected ? COLORS.selected : COLORS[type].default}`};
  :hover {
background:${(p) => (p.isSelected ? COLORS.selected : COLORS.hover)};
  }
`;
