import React from 'react';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginApp from './containers/LoginApp';
import Home from './containers/Home';
import OrdersKitchen from './components/OrderKitchen/OrderKitchen';

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/OrdersKitchen" component={OrdersKitchen} />
          <Route exact path="/LIM011-fe-burger-queen-api-client" component={LoginApp} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
