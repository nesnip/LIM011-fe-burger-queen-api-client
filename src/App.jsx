import React from 'react';
import './App.css';
import Planets from './components/Planets';
import LoginApp from './containers/LoginApp';

function App() {
  return (
    <>
      <LoginApp />
      <Planets />
    </>
  );
}

export default App;
