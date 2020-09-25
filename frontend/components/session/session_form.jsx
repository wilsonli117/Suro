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
        this.submittedBefore = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.props.formType === "signup" && this.submittedBefore) {
            const fname = document.getElementById('firstName');
            const lname = document.getElementById('lastName');
            !this.state.firstName ? fname.className = 'error' : fname.className = "";
            !this.state.lastName ? lname.className = 'error' : lname.className = "";
        } 
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        this.emailInputError || (!this.state.email && this.props.formType ==='login') ? email.className = 'error' : email.className = "" ;
        this.passwordInputError || (!this.state.password && this.props.formType === 'login')? password.className = 'error' : password.className = "" ;
        if (this.props.loggedIn) this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === "signup" && (!this.state.firstName || !this.state.lastName)) {
            const firstname = document.getElementById('firstName');
            const lastname = document.getElementById('lastName');
            !this.state.firstName ? firstname.className = 'error' : firstname.className = "";
            !this.state.lastName ? lastname.className = 'error' : lastname.className = "";
            this.submittedBefore = true;
        } else {
            this.props.action(this.state);
        }
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
                        <div className="name">
                            <div className="first-name">
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" autoFocus value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                            </div>
                            <div className="last-name">
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                            </div>
                        </div>
                        <p className="license">Enter your name as it appears on your drivers license</p>
                        <div className="details">
                            <label htmlFor="email"> Email</label>
                            <input type="email" id="email" value={this.state.email} onChange={this.handleChange('email')}/>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')}/>
                            {this.passwordInputError ? <div className="password-error"><i className="fas fa-exclamation-circle"></i><p>Please enter at least 6 characters</p></div> : null } 
                            <div className="terms">
                                <input type="checkbox" id="terms" required/>
                                <label htmlFor="terms"><p>I agree to the </p><a>terms of service</a><p>and</p><a>privacy policy.</a></label>
                            </div>
                            <div className="promo">
                                <input type="checkbox" id="promo" defaultChecked/>
                                <label htmlFor="promo">Yes, send me deals, discounts and updates!</label>
                            </div>
                            <button type="submit" className="submit-button">Sign up</button>
                            <ul className="session-errors">
                                {this.props.errors.map((error, index) => <li key={index}><i className="fas fa-exclamation-circle"></i><p>{error}</p></li>)}
                            </ul>
                        </div>
                        <div className="login">
                            <p>Already have an account?</p>
                            {this.props.logInForm}
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="login-modal">
                    <h2>Welcome back</h2>
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" autoFocus value={this.state.email} onChange={this.handleChange('email')} />
               
                    <label htmlFor="password"> Password </label>
                    <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange('password')} />
                 
                    <button type="submit" className="submit-button">Log in</button>
                    </form>
                    <span>or</span>
                    <button className="demo-button" onClick={this.props.demologin}>Continue as Demo User</button>
                    <ul className="session-errors">
                    {this.props.errors.map((error, index) => <li key={index}><i className="fas fa-exclamation-circle"></i><p>{error}</p></li>)}
                    </ul>
                
                    <div>
                        <p>Don't have an account?</p>
                        {this.props.signUpForm}
                    </div>
                </div>
            )
        }
    }


    
}

export default SessionForm;