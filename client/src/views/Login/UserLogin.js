import React from 'react';
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';

const Login = () => {
	return (
		<div className="container">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Sign In</h3>
					</div>

					<div className="card-body">
						<form>
							<div className="input-group form-group">
								<div className="input-group-prepend" />
								<InputGroup>
									<Input placeholder="username" />
									<InputGroupAddon addonType="append">
										<InputGroupText>@something.com</InputGroupText>
									</InputGroupAddon>
								</InputGroup>
							</div>
							<div className="input-group form-group">
								<div className="input-group-prepend" />
								<input type="password" className="form-control" placeholder="password" />
							</div>

							<div className="row align-items-center" />
							<div className="form-group">
								<input type="submit" value="Login" className="btn float-right login_btn blue" />
								<button>Login</button>
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
