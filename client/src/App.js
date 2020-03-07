import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
import SearchBar from './components/SearchBar';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show from './views/ShowView/Show';

const App = () => {
	return (
		<div>
			<SearchBar />
			<NavBar />
			<Switch>
				<Route exact path="/Home" component={Home} />
				<Route exact path="/">
					<Redirect to="/Home" />
				</Route>
				<Route exact path="/Register" component={Register} />
				<Route exact path="/Show" component={Show} />
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
