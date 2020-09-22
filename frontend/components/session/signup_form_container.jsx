import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'signup'
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(login(signup))
    }
}

export default connect(mSTP, mDTP)(SessionForm);