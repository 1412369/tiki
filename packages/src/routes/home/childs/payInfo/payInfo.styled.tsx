import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  width: 350px;
  margin: 20px auto;
  background: #ccc;
  .movie-time {
    padding: 10px;
    width: 50%;
    > :nth-child(2) {
      display: block;
    }
  }
  .movie-total {
    padding: 10px;
    width: 50%;
    text-align: right;
    > :nth-child(2) {
      display: block;
    }
  }
`;
