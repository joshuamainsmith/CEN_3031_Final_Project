import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import { Link } from 'react-router-dom';
import Gator from './logo.jpg';
import UserAvatar from './user-avatar.png';
import './NavigationBar.css';

const NavigationBar = () => {
	const [ dropdownOpen, setOpen ] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);

	return (
		<div> 
			<main className="top-bar_network_fixed js-top-bar top-bar">
				<nav className="navbar navbar-expand-lg navbar-blue bg-dark ">
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
							<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle caret >
									<img id="userIcon" src={UserAvatar} alt="user-icon-avatar" height="40" width="40" />
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>View Profile</DropdownItem>
									<DropdownItem divider />
									<DropdownItem href="/careers">Browse Career</DropdownItem>
									<DropdownItem>Browse Cluster</DropdownItem>
									<DropdownItem href="/users">Browse Users</DropdownItem>
									<DropdownItem>Invite User</DropdownItem>
									<DropdownItem divider />
									<DropdownItem href="/user/login">Logout</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
						</form>
					</div>
				</nav>
				<div>
					<h1 className="school-name sn-1">Florida Middle</h1>
					<img className="logo" src={Gator} alt="website logo"/>
					<h1 className="school-name sn-2">School</h1>
				</div>
			</main>
		</div>
	);
};

export default NavigationBar;
