import React from 'react';
import './CreateView.css';

function CreateView() {
	return (
		<div>
			<form role="form" className="form-inline">
				<div className="row">
					<label for="title">Title:</label>
					<input type="text" placeholder="Enter Career" />

					<label for="entry">Wages: Entry:</label>
					<input type="text" placeholder="$" />

					<label for="mean">Mean: </label>
					<input type="text" placeholder="$" />

					<label for="median">Median: </label>
					<input type="text" />
				</div>

				<label>Cluster</label>
				<div class="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Career Clusters
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</form>
			{/* Not sure yet how to make all these check boxes inline. */}
			<h4>Description</h4>
			<textarea role="form" rows="5" col="11" maxlength="400" placeholder="Career Description" />
			<h3>Education</h3>
			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					None
				</label>
			</div>

			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					High School
				</label>
			</div>

			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					Bachelor's
				</label>
			</div>

			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					Master's
				</label>
			</div>

			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					Doctorate
				</label>
			</div>

			<div className="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
				<label className="custom-control-label" for="defaultUnchecked">
					Other
					<label for="title" />
					<input type="text" />
				</label>
			</div>
			{/* Other tag */}
			<h3>Projection</h3>
			<form role="form" className="form-projection" />
			<label for="title">Percentage:</label>
			<input type="text" placeholder="$" />
		</div>
	);
}

export default CreateView;
