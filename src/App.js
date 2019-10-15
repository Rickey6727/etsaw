import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './js/pages/Home';
import Login from './js/pages/Login';

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Home' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
