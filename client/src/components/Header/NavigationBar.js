import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
	return (
		<div>
			<main>
				<nav className="navbar navbar-expand-lg navbar-blue bg-dark">
					<a className="navbar-brand" href="/home">
						Career Finder
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
								
								<a className="nav-link" href="/home">
									Home
									<span className="sr-only">(current)</span>
								</a>

							</li>
							<li className="nav-item">
								
								<a className="nav-link" href="/careers">
									Search
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
									
									<a className="dropdown-item" href="/career">
										Create Career
									</a>

									<a className="dropdown-item" href="/careers">
										Search Careers
									</a>
									
								</div>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0" action="/careers">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								name="keyword"
							/>
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
								Search
							</button>
							<img src="user-avatar.png" height="40" width="40"></img>
						</form>
					</div>
				</nav>
				<div>
				<h1 className='school-name sn-1'>Florida Middle</h1>
				<img className='logo' src="logo.jpg"></img>
				<h1 className='school-name sn-2'>School</h1>
				</div>
			</main>
		</div>
	);
};

export default NavigationBar;
