import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import { Reset } from 'styled-reset';
import GlobalStyle from './Globalstyles';
import MainLayout from './components/MainLayout';

function Rotuer() {
  return (
    <Router>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default Rotuer;
