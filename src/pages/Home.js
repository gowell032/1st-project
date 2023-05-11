import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function List() {
  return (
    <Container>
      <h1>Board</h1>
      <Table>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </Table>
      <Link to="/write">
        <button>글 쓰기</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right top, #f4f5f9, #f7f7fa, #fafafc, #fcfcfd, #ffffff);
  h1 {
    margin: 30px;
    font-size: 40px;
    color: #2bc194;
    font-weight: 600;
  }
  button {
    margin: 10px;
    padding: 10px;
    width: 60px;
    border: none;
    border-radius: 20px;
    background-color: #2bc194;
    color: #faf8ff;
  }
`;
const Table = styled.table`
  width: 800px;
  tr {
    display: flex;
    justify-content: space-around;
    height: 30px;
    border-bottom: 2px solid #767676;
    th {
      padding-top: 5px;
      font-weight: 500;
    }
  }
`;

export default List;
