import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavigationBar from './components/Header/NavigationBar';
import CreateView from './views/CreateView/CreateView';
import Credit from './components/footer/Credit';
import Search from './views/SearchView/Search';
import EditView from './views/EditView/EditView';
import IndexList from './views/IndexView/IndexList';
import ShowView from './views/ShowView/ShowView';
import UserList from './views/IndexView/UserList';


const App = () => {
	return (
		<div>
			<NavigationBar />
			<div className="container">
				<Router>
					<div>
						<Switch>
							<Route exact path="/">
								<Redirect to="/home" />
							</Route>
							<Route exact path="/home" component={Home} />
							<Route exact path="/careers" component={Search} />
							<Route exact path="/career" component={CreateView} />
							
							<Route exact path="/career/:id" component={ShowView} /> 
							<Route exact path="/career/:id" component={EditView} />
							<Route exact path="/users" component={UserList} />
							<Route exact path="/career/:id/edit" component={IndexList} />

							<Route component={NotFound} />
							
						</Switch>
					</div>
				</Router>
				<Credit />
			</div>
		</div>
	);
};

export default App;
