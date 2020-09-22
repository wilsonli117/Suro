import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastName: "",
            firstName: "",
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        if (this.props.formType === 'signup') {
            return (
                <div className="signup-modal">
                    <h2>Let's get started</h2>
                    <form>
                        <label htmlFor="firstName"> First name
                            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                        </label>
                        <label htmlFor="lastName"> Last name
                            <input type="text" id="lastName" value={this.state.firstName} onChange={this.handleChange('lastName')} />
                        </label>
                        <p>Enter your name as it appears on your drivers license</p>
                        <label htmlFor="email"> Email
                            <input type="text" id="email" value={this.state.email} onChange={this.handleChange('email')}/>
                        </label>
                        <br/>
                        <br/>
                        <label htmlFor="password">Password
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')}/>
                        </label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="terms"/>
                        <label htmlFor="terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="promo"/>
                        <label htmlFor="promo">Yes, send me deals, discounts and updates!</label>
                        <br/>
                        <br/>
                        <button type="submit" className="submit-button">Sign up</button>
                        <br/>
                        <br/>
                        <div>
                            <p>Already have an account?</p>
                            <button><Link to="/login">Log in</Link></button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="login-modal">
                    <h2>Welcome back</h2>
                    <p>Email</p>
                    <label htmlFor="email">
                        <input type="text" id="email" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <br/>
                    <p>Password</p>
                    <label htmlFor="password">
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <br />
                    <div>
                        <p>Don't have an account?</p>
                        <button><Link to="/signup">Sign up</Link></button>
                    </div>
                </div>
            )
        }
    }


    
}

export default SessionForm;