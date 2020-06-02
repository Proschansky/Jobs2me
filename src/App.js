import React from 'react';
import {Router, Route, Switch } from 'react-router-dom'
import History from './History'
import Login from './components/Login'
import Main from './Main'
import { Provider } from './Context'


function App() {
  return (
    <Provider>
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
