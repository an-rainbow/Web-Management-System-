import React, { Component } from 'react';
import 'antd/dist/antd.less';
import Login from './pages/login/Login';
import admin from './pages/admin/admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/" component={admin}></Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
