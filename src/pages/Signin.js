import axios from 'axios';
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const idHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  let body = {
    email: email,
    password: password,
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post('/auth/sign-in', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        alert('로그인에 성공하셨습니다.');
        navigate('/');
      })
      .catch(function (error) {
        if (error) {
          alert('ID와 비밀번호를 다시 확인해주세요.');
        }
      });
  };

  return (
    <Container>
      <SigninBox>
        <ModalClose>
          <Link to="/">
            <button>X</button>
          </Link>
        </ModalClose>
        <h1>로그인</h1>
        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Email을 입력하세요"
            value={email}
            onChange={idHandler}
            required
          />
          <input
            type="password"
            placeholder="Password를 입력하세요"
            value={password}
            onChange={passwordHandler}
            required
          />
          <button type="submit">시작하기</button>
        </form>
      </SigninBox>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const SigninBox = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #2bc194;
  border-radius: 30px;
  background-color: white;
  h1 {
    color: #2bc194;
    margin: 15px;
    font-size: 40px;
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin: 5px;
      width: 240px;
      height: 23px;
      padding: 10px;
      border: 2px solid #2bc194;
      border-radius: 15px;
      outline: none;
    }
    button {
      margin: 10px;
      padding: 10px;
      width: 260px;
      height: 42px;
      border: none;
      border-radius: 15px;
      background-color: #2bc194;
      color: #faf8ff;
    }
  }
`;
const ModalClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  button {
    font-size: 25px;
    border: none;
    background-color: white;
    color: #2bc194;
  }
  button:hover {
    background-color: #efefef;
    border-radius: 20px;
  }
`;
export default Signin;
