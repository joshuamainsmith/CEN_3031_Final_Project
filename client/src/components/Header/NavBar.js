import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<div>
			<main>
				<nav className="navbar navbar-expand-lg navbar-blue bg-light">
					<a className="navbar-brand" href="#">
						Career Search bar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link to="/Home">
									<a className="nav-link" href="#">
										Home
										<span className="sr-only">(current)</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Browse
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Admin
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link to="CreateView">
										<a className="dropdown-item" href="#">
											Create Careers
										</a>
									</Link>
									<Link to="Show" >
									<a className="dropdown-item" href="#">
										Show Careers
									</a>
									</Link>
									<div className="dropdown-divider" />
									<Link to="/EditView" >
									<a className="dropdown-item" href="#">
										Edit Careers
									</a>
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">
									Disabled
								</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
			</main>
		</div>
	);
};

export default NavBar;
