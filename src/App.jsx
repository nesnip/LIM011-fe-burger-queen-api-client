import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginApp from './containers/LoginApp';
import Home from './containers/Home';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <LoginApp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
