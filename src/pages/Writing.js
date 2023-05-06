import React from 'react';
import { Link } from 'react-router-dom';

function Writing() {
  return (
    <>
      <h2>Writing Page</h2>
      <input type="textarea" />
      <Link to="/list">
        <button>글 올리기</button>
      </Link>
    </>
  );
}

export default Writing;
