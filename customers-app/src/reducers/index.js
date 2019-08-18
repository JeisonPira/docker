import { combineReducers } from "redux";
import { customers } from './customers'
import { reducer as reduxForm } from 'redux-form';
import {CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_NEW} from './../constants/permissions'

const user = (state, actions) => ({
    permissions: [CUSTOMER_LIST, CUSTOMER_NEW, CUSTOMER_VIEW]
});

export default combineReducers({
    customers,
    form: reduxForm,
    user
});
