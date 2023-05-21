import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const writeService = () => {
    if (localStorage.getItem('token') === null) {
      alert('로그인이 필요한 서비스입니다.');
      window.location.replace('/signin');
    } else {
      navigate('/write');
    }
  };

  useEffect(() => {
    axios
      .get('/community/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>Board</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <button>{category.name}</button>
        </div>
      ))}

      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>테스트입니다.</td>
            <td>조형진</td>
            <td>2023.05.20</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={writeService}>글 쓰기</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to right top,
    #f4f5f9,
    #f7f7fa,
    #fafafc,
    #fcfcfd,
    #ffffff
  );
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
  /* width: 100%; */
  thead {
    border-bottom: 2px solid black;
  }
  th {
    padding: 5px;
  }
  td {
    padding: 5px;
  }
`;

export default Home;
