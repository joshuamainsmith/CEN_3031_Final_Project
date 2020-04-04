import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavigationBar from './components/Header/NavigationBar';
import CreateCareer from './views/CreateView/CreateCareer';
import Search from './views/SearchView/Search';
import EditCareer from './views/EditView/EditCareer';
import ShowCareer from './views/ShowView/ShowCareer';
import UserList from './views/IndexView/UserList';
import UserLogin from './views/Login/UserLogin';
import Signup from './views/Login/Signup';
import Recovery from './views/Login/Recovery';
import IndexClusters from './views/IndexView/IndexClusters';
import ShowCluster from './views/ShowView/ShowCluster';
import CreateUser from './views/CreateView/CreateUser';
import CreateCluster from './views/CreateView/CreateCluster';
import EditCluster from './views/EditView/EditCluster';
import EditUser from './views/EditView/EditUser';

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
							<Route exact path="/career" component={CreateCareer} />

							<Route exact path="/career/:id" component={ShowCareer} />
							<Route exact path="/career/:id/edit" component={EditCareer} />

							<Route exact path="/cluster/create" component={CreateCluster} />
							<Route exact path="/clusters" component={IndexClusters} />
							<Route exact path="/cluster/:id" component={ShowCluster} />
							<Route exact path="/cluster/:id/edit" component={EditCluster} />

							<Route exact path="/users" component={UserList} />
							<Route exact path="/user/create" component={CreateUser} />

							<Route exact path="/user/login" component={UserLogin} />
							<Route exact path="/user/signup" component={Signup} />
							<Route exact path="/user/recovery" component={Recovery} />
							<Route exact path="/user/:id/edit" component={EditUser} />

							<Route component={NotFound} />
						</Switch>
					</div>
				</Router>
			</div>
		</div>
	);
};

export default App;
