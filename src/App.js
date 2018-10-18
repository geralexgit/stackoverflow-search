import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { routes } from './router/router-config';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import { Provider } from 'react-redux';
import store from './store';
import { history } from './helpers';
import './App.css';
import Panel from './components/Panel';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Panel />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
