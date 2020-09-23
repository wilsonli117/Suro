import React from 'react';
import { connect } from 'react-redux';
import { login, demologin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'login',
        loggedIn: Boolean(state.session.id)
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(login(user)),
        demologin: () => dispatch(demologin()),
        signUpForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(SessionForm);