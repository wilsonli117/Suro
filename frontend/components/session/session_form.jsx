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

        this.passwordInputError = false;
        this.emailInputError = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
       this.emailInputError ? email.className = 'error' : email.className = "" ;
        this.passwordInputError ? password.className = 'error' : password.className = "" ;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    emailCheck(email) {
        const splitOnAt = email.split('@')
        const splitOnDot = email.split('.')
        if (!email.includes('@') || !email.includes('.') || splitOnAt.length > 2 || splitOnDot[splitOnDot.length - 1].length < 2 || !email.length) {
            return false;
        } else {
            return true;
        }
    }

    handleChange(field) {
        return e => {
            (field == 'password' && e.currentTarget.value.length < 6 && e.currentTarget.value != 0) ? this.passwordInputError = true : this.passwordInputError = false;
            (field === 'email' && !this.emailCheck(e.currentTarget.value)) ? this.emailInputError = true : this.emailInputError = false;
            return this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        if (this.props.formType === 'signup') {
            return (
                <div className="signup-modal">
                    <h2>Let's get started</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="firstName"> First name
                            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                        </label>
                        <label htmlFor="lastName"> Last name
                            <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                        </label>
                        <p>Enter your name as it appears on your drivers license</p>
                        <label htmlFor="email"> Email
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange('email')}/>
                        </label>
                        <br/>
                        <br/>
                        <label htmlFor="password">Password
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')}/>
                        </label>
                            {this.passwordInputError ? <div>Please enter at least 6 characters</div> : null } 
                        <br/>
                        <br/>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</label>
                        <br/>
                        <br/>
                        <input type="checkbox" id="promo" checked/>
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
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email
                        <input type="text" id="email" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="password"> Password
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                        {this.passwordInputError ? <div>Please enter at least 8 characters</div> : null} 
                    <br/>
                    <br/>
                    <button type="submit" className="submit-button">Login</button>
                    </form>
                    <ul className="session-errors">
                        {this.props.errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
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