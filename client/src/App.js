import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavigationBar from './components/Header/NavigationBar';
import CreateView from './views/CreateView/CreateView';
//import Credit from './components/footer/Credit';
import Search from './views/SearchView/Search';
import EditView from './views/EditView/EditView';
import IndexList from './views/IndexView/IndexList';
import ShowView from './views/ShowView/ShowView';
import UserList from './views/IndexView/UserList';
import UserLogin from './views/Login/UserLogin';
import Signup from './views/Login/Signup';
import Recovery from './views/Login/Recovery';

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

							<Route exact path="careers" component={IndexList} />
							<Route exact path="/career/:id" component={ShowView} />
							<Route exact path="/career/:id/edit" component={EditView} />
							<Route exact path="/users" component={UserList} />

							<Route exact path="/user/login" component={UserLogin} />
							<Route exact path="/user/signup" component={Signup} />
							<Route exact path="/user/recovery" component={Recovery} />

							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</div>
		</div>
	);
};

export default App;
