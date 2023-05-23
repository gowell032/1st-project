import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import QuillEditor from '../components/QuillEditor';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subCategoryId, setSubCategoryId] = useState(0);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const newContentHandler = (newContent) => {
    console.log(newContent);
    setContent(newContent);
  };

  const domesticHandler = (e) => {
    e.preventDefault();
    setSubCategoryId(2);
  };
  const internationalHandler = (e) => {
    e.preventDefault();
    setSubCategoryId(3);
  };

  let body = {
    title: title,
    subCategoryId: subCategoryId,
    content: content,
  };

  const token = localStorage.getItem('token');

  const writePost = (e) => {
    e.preventDefault();
    if (body.title === '') {
      alert('제목을 입력해주세요.');
    } else if (body.subCategoryId === 0) {
      alert('카테고리를 선택해주세요.');
    } else if (body.content === '') {
      alert('컨텐츠를 입력해주세요.');
    }
    axios
      .post('/community/post', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.request.status === 201) {
          alert('글이 생성되었습니다.');
          window.location.replace('/');
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={titleHandler}
        />
        <CategoriesWrap>
          <button value={subCategoryId} onClick={domesticHandler}>
            국내
          </button>
          <button value={subCategoryId} onClick={internationalHandler}>
            국외
          </button>
        </CategoriesWrap>
        <QuillEditor value={content} onChange={newContentHandler} />
        <BtnBox>
          <button>돌아가기</button>
          <button onClick={writePost}>게시하기</button>
        </BtnBox>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  form {
    margin: 50px auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 5px;
    width: 100%;
    height: 40px;
    font-size: 40px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #cccccc;
    outline: none;
  }
  input:focus {
    border-bottom: 2px solid #303030;
  }
`;

const CategoriesWrap = styled.div`
  button {
    margin: 10px 5px 10px 0px;
    width: 60px;
    height: 40px;
    background-color: #303030;
    color: #faf8ff;
    border: none;
    border-radius: 15px;
  }
`;
const BtnBox = styled.div`
  align-self: flex-end;
  button {
    margin: 10px 0px 0px 5px;
    width: 100px;
    height: 42px;
    border: none;
    border-radius: 15px;
    background-color: #303030;
    color: #faf8ff;
  }
`;

export default Write;
