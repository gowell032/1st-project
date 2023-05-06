import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function List() {
  return (
    <Container>
      <h1>Board</h1>
      <Table>
        <BoardHeader>
          <tr>
            <th>id</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </BoardHeader>
        <thead>
          <tr></tr>
        </thead>
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
  h1 {
    font-size: 30px;
    margin: 30px;
  }
`;
const Table = styled.table`
  width: 800px;
`;
const BoardHeader = styled.thead`
  height: 25px;
  border-bottom: 2px solid #767676;
`;

export default List;
