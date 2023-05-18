import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Signup() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passworCf, setPasswordCf] = useState('');

  const idHandler = (e) => {
    e.preventDefault;
    setId(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault;
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault;
    setPassword(e.target.value);
  };
  const passwordCfHandler = (e) => {
    e.preventDefault;
    setPasswordCf(e.target.value);
  };

  let body = {
    email: email,
    userName: id,
    password: password,
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios
      .post('/auth/sign-up', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <Container>
      <SignupBox>
        <ModalClose>
          <Link to="/">
            <button>X</button>
          </Link>
        </ModalClose>
        <h1>회원가입</h1>

        <form onSubmit={registerUser}>
          <input
            id="userName"
            type="text"
            placeholder="ID를 입력하세요"
            value={id}
            onChange={idHandler}
            required
          />
          <input
            id="email"
            type="email"
            placeholder="Email을 입력하세요"
            value={email}
            onChange={emailHandler}
            required
          />
          <input
            id="Pw"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={passwordHandler}
            required
          />
          <input
            id="PwConfirm"
            type="password"
            placeholder="비밀번호 확인"
            value={passworCf}
            onChange={passwordCfHandler}
            required
          />
          <button type="submit">가입하기</button>
        </form>
      </SignupBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const SignupBox = styled.div`
  width: 400px;
  height: 500px;
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

export default Signup;
