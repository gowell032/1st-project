import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

function Home() {
  const navigate = useNavigate();
  // 카테고리를 위한 값들
  const [categories, setCategories] = useState([]);
  const [subCategoryIdActive, setSubCategoryIdActive] = useState(1);
  const [subCategoryId, setSubCategoryId] = useState(1);

  // 화면에 표시할 포스트와 페이지네이션을 위한 값들
  const [posts, setPosts] = useState([]); // 리스트에 보여줄 포스트
  const [postTotal, setPostTotal] = useState(0); // 서버에서 보내주는 포스트의 총 개수
  const [page, setPage] = useState(0); // 페이지네이션의 현재 페이지

  const setPageHandler = (e) => {
    setPage((e.selected * 10) % postTotal);
  };

  const write = () => {
    if (localStorage.getItem('token') === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signin');
    } else {
      navigate('/write');
    }
  };

  const subCategoryIdHandler = (e) => {
    setSubCategoryId(Number(e.target.value));
    // 한 카테고리에서 page값을 저장 후 다른 카테고리로 넘어갈때 page값이 그대로 남는 문제로 page 스테이트를 초기화
    setPage(0);
  };
  const subCategoryIdActiveHandler = (categoryId) => {
    setSubCategoryIdActive(categoryId);
  };

  useEffect(() => {
    axios
      .get('/community/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getCategoriesData();
  }, [subCategoryId, page]);

  const getCategoriesData = () => {
    axios
      .get(
        `/community/posts/list/${subCategoryId}?sort=latest&offset=${page}&limit=10`
      )
      .then((response) => {
        setPosts(response.data.postLists);
        setPostTotal(response.data.total);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <CategoriesWrap>
        {categories.map((category) => (
          <CategoriesLabel
            key={category.id}
            active={subCategoryIdActive === category.id}
            onClick={() => subCategoryIdActiveHandler(category.id)}
          >
            <input
              type="radio"
              value={category.id}
              onChange={subCategoryIdHandler}
              checked={subCategoryId === category.id}
              onClick={() => getCategoriesData}
            />
            {category.name}
          </CategoriesLabel>
        ))}
      </CategoriesWrap>
      <Table>
        <thead>
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        {posts.map((post) => (
          <tbody key={post.postId}>
            <tr>
              <td>{post.postId}</td>
              <td>{post.post_title}</td>
              <td>{post.userName}</td>
              <td>{post.createdAt}</td>
            </tr>
          </tbody>
        ))}
      </Table>
      <button onClick={write}>글 쓰기</button>
      <Pagination setPageHandler={setPageHandler} postTotal={postTotal} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 30px;
    font-size: 40px;
    color: #2bc194;
    font-weight: 600;
  }
  button {
    width: 80px;
    height: 40px;
    margin: 5px 0px;
    padding: 6px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    align-self: flex-end;
  }
`;

const Table = styled.table`
  width: 1000px;
  thead {
    border-bottom: 2px solid black;
  }
  tbody {
    border-bottom: 1px solid black;
  }
  th {
    padding: 5px;
    :nth-child(4) {
      width: 200px;
    }
  }
  td {
    padding: 10px;
    text-align: center;
  }
`;
const CategoriesWrap = styled.div`
  margin: 10px 0px 10px 0px;
  display: flex;
  align-self: flex-start;
  input {
    display: none;
  }
`;
const CategoriesLabel = styled.label`
  background-color: ${(props) => (props.active ? 'black' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  margin: 5px 5px 5px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const CommunityWrap = styled.div`
  display: flex;
  align-self: flex-start;
  h2 {
    font-size: 40px;
    font-weight: bold;
  }
`;

export default Home;
