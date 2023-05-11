import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Header from './components/Header';
import { Reset } from 'styled-reset';
import GlobalStyle from './Globalstyles';

function App() {
  return (
    <Router>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail" element={<Detail />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
