import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './js/pages/Home';

export default class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
