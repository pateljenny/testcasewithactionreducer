import React, { Component } from 'react'
import './regi.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
// import { loginAction } from './Action/action'
export class Login extends Component {

    state = {
        email: '',
        password: '',
        submitted: false
        
    }
    handleSubmit = () => {
        this.setState({ submitted: true })
        let { email, password } = this.state;
        if (email !== '' && password !== '') {
            if (email.match()) {
                this.props.loginAction({ email, password }).then(() => {
                    if (localStorage.getItem('token'))
                        this.props.history.replace('/home');
                });
            }
            else
                this.setState({ invalid: true })
        }
    }

render() {
        return (
            <div className="container" style={{padding:"25px"}}>
                <div className="container">
                    <div className="row main">
                        <div className="main-login main-center">
                            <h5>Sign up once</h5>
                            <form className="demo">
                                <div className="form-group">

                                    <label for="name" class="cols-sm-2 control-label">Your Name</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="email" className="cols-sm-2 control-label">Your Email</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Enter your Email" />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label for="username" className="cols-sm-2 control-label">Username</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                            <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Username" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>	<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>
                        <div className="form-group ">
							<a href="https://deepak646.blogspot.com/" target="_blank" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
						</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatch = (dispatch) => {
    return {
        // loginAction: bindActionCreators(loginAction, dispatch)
    }
}
export default withRouter(connect(null, mapDispatch)(Login));

// export default Login;