import styled from 'styled-components';
export const Container = styled.div`
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
