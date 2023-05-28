import axios from 'axios';
import React, { useRef } from 'react';
import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function QuillEditor({ value, onChange, gotUrl, setGotUrl }) {
  const quillRef = useRef(null);
  const token = localStorage.getItem('token');

  const contentHandler = (content) => {
    onChange(content);
  };

  // base64 -> url로 변환하기 위한 이미지 처리 함수

  const imageHandler = () => {
    const input = document.createElement('input');
    const formData = new FormData();
    let url = '';

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files;
      if (file !== null) {
        formData.append('image', file[0]);
        axios
          .post('/community/post/image', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            url = response.data;
            let urlArr = gotUrl;
            urlArr.push(url);
            setGotUrl(urlArr);
            const range = quillRef.current?.getEditor().getSelection()?.index;
            if (range !== null && range !== undefined) {
              let quill = quillRef.current?.getEditor();

              quill?.setSelection(range, 1);

              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<img src=${url} alt="article image" />`
              );
            }
          })
          .catch((error) => alert(error));
      } else {
        alert('5MB 이하의 이미지만 업로드할 수 있습니다.');
      }
    };
  };

  // modules에 useMemo를 써주지 않으면 콘솔창에
  // addrange() the given range isn't in document 에러 발생

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image'],
        ],
        handlers: { image: imageHandler },
      },
    };
  }, []);

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
    <StyledReactQuill
      ref={quillRef}
      theme="snow"
      placeholder={'내용을 작성하세요'}
      value={value}
      onChange={contentHandler}
      modules={modules}
      formats={formats}
    />
  );
}

const StyledReactQuill = styled(ReactQuill)`
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

export default QuillEditor;
