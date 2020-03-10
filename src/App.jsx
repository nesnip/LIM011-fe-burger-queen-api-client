import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginApp from './containers/LoginApp';
import MenuApp from './containers/HomeApp';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/HomeApp" component={MenuApp} />
        <Route exact path="/" component={LoginApp} />
      </>
    </BrowserRouter>
  );
}

export default App;
