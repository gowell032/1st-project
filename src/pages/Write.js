import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subCategoryId, setSubCategoryId] = useState(0);

  const contentHandler = (content) => {
    setContent(content);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
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
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

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
        <TextEditor
          theme="snow"
          placeholder={'내용을 작성하세요'}
          value={content}
          onChange={contentHandler}
          modules={modules}
          formats={formats}
        />
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
  background-image: linear-gradient(
    to right top,
    #f4f5f9,
    #f7f7fa,
    #fafafc,
    #fcfcfd,
    #ffffff
  );
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
    background-image: linear-gradient(
      to right top,
      #f4f5f9,
      #f7f7fa,
      #fafafc,
      #fcfcfd,
      #ffffff
    );
  }
  input:focus {
    border-bottom: 2px solid #2bc194;
  }
`;

const CategoriesWrap = styled.div`
  button {
    width: 50px;
    height: 30px;
  }
`;
const TextEditor = styled(ReactQuill)`
  .ql-container {
    height: 500px;
    .ql-editor.ql-blank::before {
      font-size: 16px;
    }
    .ql-editor strong {
      font-weight: bold;
    }
    .ql-editor em {
      font-style: italic;
    }
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const BtnBox = styled.div`
  align-self: flex-end;
  button {
    margin-top: 10px;
    margin-left: 5px;
    width: 100px;
    height: 42px;
    border: none;
    border-radius: 15px;
    background-color: #2bc194;
    color: #faf8ff;
  }
`;

export default Write;
