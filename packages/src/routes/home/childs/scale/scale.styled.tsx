import styled from 'styled-components';
export const Container = styled.div`
  margin: auto;
  padding: 0;
  width: 350px;
  text-align: center;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    li {
      font-size: 14px;
      > div {
        float: right;
        transform: translateY(-3px);
      }
    }
  }
`;
