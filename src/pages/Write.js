import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Write() {
  // const [content, setContent] = useState('');
  const onChangeContent = (content) => {
    console.log(content);
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
        <input type="text" placeholder="제목을 입력하세요" />
        <TextEditor
          theme="snow"
          placeholder="내용을 작성하세요"
          // value={content}
          onChange={onChangeContent}
          modules={modules}
          formats={formats}
        />
        <BtnBox>
          <Link to="/">
            <button>돌아가기</button>
          </Link>
          <button>게시하기</button>
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
    margin-bottom: 10px;
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
const TextEditor = styled(ReactQuill)`
  .ql-container {
    height: 500px;
  }
  .ql-editor strong {
    font-weight: bold;
  }
  .ql-editor em {
    font-style: italic;
  }
  p {
    font-size: 16px;
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
