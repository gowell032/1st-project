import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';

function Signin() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleId = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    // api
  });

  return (
    <div>
      <h1>SIGN IN</h1>
      <form method="POST">
        <input id="email" type="email" value={email} placeholder="Email" onChange={handleId} required />
        <input id="pw" type="password" value={pw} placeholder="Password" onChange={handlePw} required />
        <Link to="/">
          <input type="submit" value="Login" />
        </Link>
      </form>
    </div>
  );
}

export default Signin;
