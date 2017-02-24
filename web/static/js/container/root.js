import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configRoutes from '../route';

const propTypes = {
  routerHistory: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const Root = ({ routerHistory, store }) => {
  return (
    <Provider store={store}>
      <Router history={routerHistory}>
        {configRoutes()}
      </Router>
    </Provider>
  );
};

Root.propTypes = propTypes;
export default Root;
