import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { loginAction } from './Action/action'
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
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            {/* <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div> */}
                        </div>
                        <div className="card-body">

                            <form>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="material-icons">mail</i></span>
                                    </div>
                                    <input type="email"  className='email' hint="email" onChange={(event) => { this.setState({ email: event.target.value, submitted: false }) }}  className="form-control" placeholder="email"></input>
                                    {this.state.submitted && this.state.email === '' ? <Label style={{backgroundColor:"#e6ffe6"}} pointing>Please enter your email</Label> : null}
                                   
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="material-icons">lock</i></span>
                                    </div>
                                    <input type="password" hint="password" onChange={(event) => { this.setState({ password: event.target.value, submitted: false }) }}  className="form-control" placeholder="password" />
                                    {this.state.submitted && this.state.password === '' ? <Label style={{backgroundColor:"#e6ffe6"}} pointing>Please enter your password</Label> : null}
                                </div>
                                <div className="row align-items-center remember" style={{marginLeft:"2px"}}>
                                    <input type="checkbox" />Remember Me
					</div>
                                <div className="form-group">
                                    <b></b><button type="button"  onClick={this.handleSubmit} value="Login" name="Login" className="btn float-right login_btn" style={{height:"30%",fontSize:"18px"}}>Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatch = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}
export default withRouter(connect(null, mapDispatch)(Login));

// export default Login;