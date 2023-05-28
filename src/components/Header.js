import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다.');
    window.location.replace('/');
  };

  return (
    <>
      <Container>
        <Wrap>
          <Logo>
            <Link to="/">
              <button>Hip</button>
            </Link>
          </Logo>
          {localStorage.getItem('token') === null ? (
            <Join>
              <Link to="/signin">
                <button>로그인</button>
              </Link>
              <Link to="/signup">
                <button>회원가입</button>
              </Link>
            </Join>
          ) : (
            <Join>
              <Link to="/Mypage">
                <button>My</button>
              </Link>
              <button onClick={logout}>로그아웃</button>
            </Join>
          )}
        </Wrap>
      </Container>
    </>
  );
}

const Container = styled.header`
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
`;
const Wrap = styled.div`
  width: 1290px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  margin: 10px;
  button {
    font-size: 30px;
    font-weight: bold;
    border: none;
    background-color: white;
    color: black;
  }
`;
const Join = styled.div`
  margin: 10px;
  button {
    width: 80px;
    height: 40px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: #faf8ff;
  }
`;

export default Header;
