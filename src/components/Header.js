import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <Container>
        <Logo>
          <Link to="/">
            <button>Board</button>
          </Link>
        </Logo>
        <Join>
          <Link to="/signin">
            <button>로그인</button>
          </Link>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </Join>
      </Container>
      <Outlet />
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
`;
const Logo = styled.div`
  margin: 10px;
  button {
    font-size: 30px;
    border: none;
    background-color: white;
    color: #2bc194;
  }
`;
const Join = styled.div`
  margin: 10px;
  button {
    width: 60px;
    height: 30px;
    margin: 5px;
    padding: 6px;
    border: none;
    border-radius: 15px;
    background-color: #2bc194;
    color: #faf8ff;
    cursor: pointer;
  }
`;

export default Header;
