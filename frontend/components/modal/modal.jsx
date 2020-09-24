import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

const Modal = props => {
    if (!props.modal) return null;

    let component;

    switch(props.modal) {
        case 'login':
            component = <LoginFormContainer />
            break;

        case 'signup':
            component = <SignupFormContainer />
            break;

        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);