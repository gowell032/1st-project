import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Link to="/signin">
        <button>로그인</button>
      </Link>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  button {
    width: 60px;
    padding: 6px;
    margin: 5px;
    border: none;
    border-radius: 15px;
    background-color: white;
    color: #767676;
    cursor: pointer;
  }
`;

export default Header;
