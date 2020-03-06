import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginApp from './containers/LoginApp';
import MenuApp from './containers/HomeApp';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/LoginApp" component={LoginApp} />
        <Route path="/MenuApp" component={MenuApp} />
      </>
    </BrowserRouter>
  );
}

export default App;
