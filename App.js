import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (
      <Router  history={browserHistory}>
        <div className="App" >
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;