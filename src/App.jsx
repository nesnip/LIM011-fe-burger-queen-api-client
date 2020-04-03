import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginApp from './containers/LoginApp';
import Home from './containers/Home';
import OrdersKitchen from './containers/OrdersKitchen';

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/Home" component={Home} />
        <Route path="/OrdersKitchen" component={OrdersKitchen} />
        <Route exact path="/" component={LoginApp} />
      </>
    </BrowserRouter>
  );
}

export default App;
