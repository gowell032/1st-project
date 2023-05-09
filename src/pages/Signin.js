import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Signin() {
  return (
    <Container>
      <SigninBox>
        <h1>로그인</h1>
        <form method="POST">
          <input type="email" placeholder="Email을 입력하세요" required />
          <input type="password" placeholder="Password를 입력하세요" required />
          <Link to="/">
            <button type="submit">시작하기</button>
          </Link>
        </form>
      </SigninBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right top, #f4f5f9, #f7f7fa, #fafafc, #fcfcfd, #ffffff);
`;
const SigninBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      cursor: pointer;
    }
  }
  h1 {
    color: #2bc194;
    margin: 15px;
    font-size: 40px;
    font-weight: 600;
  }
`;
export default Signin;
