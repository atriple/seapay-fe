import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import LoginPage from '../LoginPage/LoginPage';
import SignUpCustomerPage from '../SignUpCustomerPage/SignUpCustomerPage';
import TopUpPage from '../TopUpPage/TopUpPage';
import Dashboard from '../Dashboard';
import RolePage from '../RolePage';
import CustomerCard from '../CustomerCard';
import ItemCard from '../ItemCard';

import '../../assets/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={RolePage} />
        <Route exact path="/signup/customer" component={SignUpCustomerPage} />
        <Route exact path="/topup" component={TopUpPage} />
        <Route exact path="/customer-card" component={CustomerCard} />
        <Route exact path="/item-card" component={ItemCard} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}

export default App;
