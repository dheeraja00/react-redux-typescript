/*
    Login component to provide view for login form & reflect different login actions like error success, validation
*/

import * as React from 'react';
import { connect } from 'react-redux';
// Withrouter helps to render this component when route change
// Link is to create navigation link
import { withRouter, Link } from 'react-router-dom';

// Required actions for login user
import { emailChanged, passwordChanged, loginUser } from '../../actions';
// Common component can be used to add input field or spinner while logging in
import { Spinner, Input } from '../../common';
// Login props interface
import LoginProps from './interface';
import mapStateToProps from './mapToProps';

class LoginForm extends React.Component<LoginProps, any> {
    // This will be called whenever props get changed
    componentWillReceiveProps(nextProps: any) {
        // Look for success prop & redirect to employee after successful login
        if (nextProps.success) {
            nextProps.history.push('/employee');
        }
    }

    // Call action when email is changed, this will also update auth reducer with new email value
    onEmailChange(event: any) {
        this.props.emailChanged(event.target.value);
    }

    // Call password action when changed, and update password in store  
    onPasswordChange(event: any) {
        this.props.passwordChanged(event.target.value);
    }

    // Fire login api to login user
    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner />
        }

        // Not showing login button if user successfully logges in
        if(!this.props.success) {
            return (
                <button className="btn"
                    onClick={this.onButtonPress.bind(this)}>
                    Login
                </button>
            )
        }
    }

    // Display error if there will be any
    showError() {
        if(this.props.error) {
            return (
                <div className="row">
                    <div className="card-panel red lighten-5 error-message">
                        <span className="red-text">{this.props.error}</span>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="col s12 m5">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Login</span>
                            
                            {this.showError()}

                            <div className="row">
                                <Input 
                                    inputType="text"
                                    label="Email"
                                    placeholder="email@gmail.com"
                                    onInput={this.onEmailChange.bind(this)}
                                    value={this.props.email}
                                    id="email" />
                            </div>

                            <div className="row">
                                <Input
                                    inputType="password"
                                    label="Password"
                                    placeholder="password"
                                    onInput={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    id="password" />
                            </div>

                            <div className="row">
                                {this.renderButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Connect mapStatetoprops & actions 
export default withRouter(connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm));