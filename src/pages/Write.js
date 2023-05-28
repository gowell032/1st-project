import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import QuillEditor from '../components/QuillEditor';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [categoryActive, setCategoryActive] = useState('');
  const [gotUrl, setGotUrl] = useState([]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const newContentHandler = (newContent) => {
    setContent(newContent);
  };
  const categoryHandler = (e) => {
    setSubCategoryId(Number(e.target.value));
  };
  const categoriesActHandler = (category) => {
    setCategoryActive(category);
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
    } else if (body.title.length > 50) {
      alert('제목을 50자 이하로 작성해주세요.');
    } else {
      const regex = /<img[^>]+src=[\"']?([^>\"']+)[\"']?[^>]*>/g;
      const urls = [];
      let match;
      while ((match = regex.exec(body.content)) !== null) {
        urls.push(match[1]);
      }
      let deleteUrl = [];
      gotUrl.map((str) => {
        if (!urls.includes(str)) {
          const cutUrl = str.substring(59);
          deleteUrl.push(cutUrl);
        }
      });

      axios
        .post('/community/post', body, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.request.status !== 201) {
            throw Error('글등록에 실패하였습니다.');
          } else {
            axios
              .delete(`/community/post/image`, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                data: { toDeleteImage: deleteUrl },
              })
              .then((response) => {
                if (response.status !== 200) {
                  throw Error('이미지 삭제에 실패하였습니다.');
                } else {
                  alert('글이 게시되었습니다.');
                  window.location.replace('/');
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('글등록에 실패하였습니다.');
        });
    }
  };

  return (
    <Container>
      <form onSubmit={writePost}>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={titleHandler}
        />
        <CategoriesWrap>
          <CategoriesLabel
            active={categoryActive === 'domestic'}
            onClick={() => categoriesActHandler('domestic')}
          >
            <input
              type="radio"
              value={2}
              onChange={categoryHandler}
              checked={subCategoryId === 2}
            />
            국내
          </CategoriesLabel>
          <CategoriesLabel
            active={categoryActive === 'international'}
            onClick={() => categoriesActHandler('international')}
          >
            <input
              type="radio"
              value={3}
              onChange={categoryHandler}
              checked={subCategoryId === 3}
            />
            국외
          </CategoriesLabel>
        </CategoriesWrap>

        <QuillEditor
          value={content}
          onChange={newContentHandler}
          gotUrl={gotUrl}
          setGotUrl={setGotUrl}
        />

        <BtnWrap>
          <button>게시하기</button>
        </BtnWrap>
      </form>
    </Container>
  );
}

const Container = styled.div`
  form {
    width: 1290px;
    margin: 0 auto;
    padding: 30px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
  }
`;
const TitleInput = styled.input`
  padding: 5px;
  font-size: 40px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  &:focus {
    border-bottom: 1px solid black;
  }
`;

const CategoriesWrap = styled.div`
  display: flex;
  input {
    display: none;
  }
`;
const CategoriesLabel = styled.label`
  background-color: ${(props) => (props.active ? 'black' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  margin: 5px 5px 5px 0px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const BtnWrap = styled.div`
  align-self: flex-end;
  button {
    margin: 5px 0px 0px 5px;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-size: 16px;
  }
`;

export default Write;
