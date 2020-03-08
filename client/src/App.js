import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
//import SearchBar from './components/SearchBar';
//import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Show from './views/ShowView/Show';
import Credit from './components/Footer/Credit';
import EnterButton from './components/EnterButton';

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/Home" component={Home} />
				<Route exact path="/">
					<Redirect to="/Home" />
				</Route>
				<Route component={NotFound} />
			</Switch>
			<main>
				<thead>
					<NavBar />
				</thead>
				<body>
					<EnterButton />
				</body>
				<footer>
					<Credit />
				</footer>
			</main>
		</div>
	);
};

export default App;
