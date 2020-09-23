import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        loggedIn: Boolean(state.session.id)
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(signup(user)),
        logInForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SessionForm);