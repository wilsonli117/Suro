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

                        <label for="firstName">First name
                            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                        </label>
                        <label for="lastName"> Last name
                            <input type="text" id="lastName" value={this.state.firstName} onChange={this.handleChange('lastName')} />
                        </label>
                        <p>Enter your name as it appears on your drivers license</p>
                        <label for="email">
                            <input type="text" id="email" value={this.state.email} onChange={this.handleChange('email')}/>
                        </label>
                        <label for="password">
                            <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')}/>
                        </label>
                        <input type="checkbox" id="terms"/>
                        <label for="terms">I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.</label>
                        <input type="checkbox" id="promo"/>
                        <label for="promo">Yes, send me deals, discounts and updates!</label>
                        <button type="submit" className="submit-button">Sign up</button>
                        <br/>
                        <br/>
                        <div>
                            <p>Already have an account?</p>
                            <Button><Redirect to="/login">Log in</Redirect></Button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="login-modal">
                    <h2>Welcome back</h2>
                    <label for="email">
                        <input type="text" id="email" value={this.state.email} onChange={this.handleChange('email')} />
                    </label>
                    <label for="password">
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange('password')} />
                    </label>
                    <br />
                    <br />
                    <div>
                        <p>Don't have an account?</p>
                        <Button><Redirect to="/login">Log in</Redirect></Button>
                    </div>
                </div>
            )
        }
    }


    
}

export default SessionForm;