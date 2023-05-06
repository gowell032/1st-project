import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/writing">
        <button>글 작성하기</button>
      </Link>
      <Link to="/list">
        <button>리스트</button>
      </Link>
    </>
  );
}

export default Home;
