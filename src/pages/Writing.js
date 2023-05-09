import React from 'react';
// import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function Writing() {
  return (
    <Container>
      <input type="text" placeholder="제목을 입력하세요." />
      <ReactQuill style={{ width: '100vw', height: '500px', maxWidth: '812px' }} />
      <button>게시하기</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  input {
    width: 100vw;
    padding: 6px;
    height: 40px;
    margin-bottom: 10px;
    max-width: 800px;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
`;

export default Writing;
