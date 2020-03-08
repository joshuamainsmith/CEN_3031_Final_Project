import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
import CreateView from './views/CreateView/CreateView';
import IndexView from './views/IndexView/IndexList';
import Credit from './components/Footer/Credit';
import Show from './views/ShowView/Show';
import EditView from './views/EditView/EditView';

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Redirect to="/Home" />
					</Route>
					<Route exact path="/Home" component={Home} />
					<Route exact path="/Show" component={Show} />
					<Route exact path="/CreateView" component={CreateView} />
					<Route exact path="/IndexView" component={IndexView} />
					<Route exact path="/EditView" component={EditView} />
					<Route component={NotFound} />
				</Switch>
				<footer>
					<Credit />
				</footer>
			</div>
		</Router>
	);
};

export default App;
