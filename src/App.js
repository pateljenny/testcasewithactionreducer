import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Login from './Login';
import Home from './Home';
import './App.css';
import Card from './card';
import Sumsung from './Moblies./sumsung';
import Iphone from './Moblies./iphone';
import Redmi from './Moblies./Redmi';
import Register from './Register/register';

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
        <Route path='/login' render={Login} />
        <Route path='/register' render={Register}></Route>
        <Route path='/home' render={Home} />
        <Route path='/card' render={Card}></Route>
        <Route path='/sumsung' render={Sumsung}></Route>
        <Route path='/iphone' render={Iphone}></Route>
        <Route path='/redmi' render={Redmi}></Route>
        
      </Provider>
    </Router>
    );
  }
}

export default App;
