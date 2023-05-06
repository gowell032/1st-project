import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h1>회원가입</h1>
      <form method="POST">
        <label htmlFor="userName">User Name</label>
        <input id="userName" type="text" placeholder="이름을 입력해주세요" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email을 입력해주세요" />
        <label htmlFor="pw">비밀번호</label>
        <input id="Pw" type="password" placeholder="비밀번호" />
        <label htmlFor="pw">비밀번호 확인</label>
        <input id="PwConfirm" type="text" placeholder="비밀번호 확인" />
        <Link to="/sigin">
          <input type="submit" value="Signup" />
        </Link>
      </form>
    </div>
  );
}

export default Signup;
