import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
    <div>
      {/* <h1>Hello</h1> */}
    </div>
    <Switch>
      <Route exact path='/login' component={Login} />

      <Route exact path='/view'>
        <UserList/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
