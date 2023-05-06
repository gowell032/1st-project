import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Writing from './pages/Writing';
import Detail from './pages/Detail';
import List from './pages/List';
import Header from './components/Header';
import { Reset } from 'styled-reset';

function App() {
  return (
    <Router>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/write" Component={Writing} />
        <Route path="/detail" Component={Detail} />
        <Route path="/list" Component={List} />
      </Routes>
    </Router>
  );
}

export default App;
