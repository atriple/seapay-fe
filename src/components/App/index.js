import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import NavBar from '../NavBar';
import TopUpPage from '../TopUpPage/TopUpPage';

import '../../assets/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/topup" component={TopUpPage} />
      </Router>
    );
  }
}

export default App;