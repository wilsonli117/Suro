import { connect } from 'react-redux';
import { login, demologin } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = state => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(login(user)),
        demologin: () => dispatch(demologin())
    }
}

export default connect(mSTP, mDTP)(SessionForm);