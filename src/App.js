import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './router/router-config';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</div>
			</Router>
		);
	}
}

export default App;
