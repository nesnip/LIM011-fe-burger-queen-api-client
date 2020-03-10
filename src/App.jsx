import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginApp from './containers/LoginApp';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={LoginApp} />
      </>
    </BrowserRouter>
  );
}

export default App;
