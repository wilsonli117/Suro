import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import filtersReducer from './filter_reducer';

export default combineReducers({ 
    modal: modalReducer,
    filters: filtersReducer 
});