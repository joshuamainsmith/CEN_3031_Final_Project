import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
	return (
		<div className="container">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fab fa-facebook-square" />
							</span>
							<span>
								<i className="fab fa-google-plus-square" />
							</span>
							<span>
								<i className="fab fa-twitter-square" />
							</span>
						</div>
					</div>

					<div className="card-body">
						<form>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-user" />
									</span>
								</div>
								<input type="text" className="form-control" placeholder="username" />
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fas fa-key" />
									</span>
								</div>
								<input type="password" className="form-control" placeholder="password" />
							</div>

							<div className="row align-items-center" />
							<div className="form-group">
								<input type="submit" value="Login" className="btn float-right login_btn blue" />
							</div>
						</form>
					</div>

					<div class="card-footer">
						<div class="d-flex justify-content-center links">
							Don't have an account?<a href="/user/signup">Sign Up</a>
						</div>
						<div class="d-flex justify-content-center">
							<a href="/user/recovery">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
