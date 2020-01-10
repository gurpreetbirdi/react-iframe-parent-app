import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'reactstrap';

import './Main.css';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import ChildApp from './ChildApp';

const Main = props => {
  return (
    <Router>
      <Container className="themed-container" fluid={true}>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/child-app-one">
            <ChildApp appName="child-app-one" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

Main.propTypes = {
  name: PropTypes.string
};

export default Main;