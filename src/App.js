import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom'
import History from './History'
import Login from './components/Login'
import Main from './Main'
import { Provider } from './Context'


function App() {
  return (
    <Provider>
      <Main/>
    </Provider>
  );
}

export default App;
