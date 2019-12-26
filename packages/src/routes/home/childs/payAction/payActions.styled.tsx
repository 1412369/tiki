import styled from 'styled-components';
export const Container = styled.div`
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
