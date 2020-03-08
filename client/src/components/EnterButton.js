import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EnterButton() {
	return (
		<div>
			<div className="row">
				<div className="col">
					<Link to='/Show'>
					<button
						type="button"
						className="btn btn-primary col text-center container-fluid">
						Discover Your Future Career Now!
					</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default EnterButton;
