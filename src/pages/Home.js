import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function List() {
  return (
    <Container>
      <h1>Board</h1>
      <Table>
        <tr>
          <th>id</th>
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
  padding: 30px;
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
`;
const Table = styled.table`
  width: 800px;
  tr {
    height: 25px;
    border-bottom: 2px solid #767676;
    th {
      font-weight: 500;
    }
  }
`;

export default List;
