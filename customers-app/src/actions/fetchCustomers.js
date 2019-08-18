import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';
import { urlCustomers } from '../api/urls'
import { apiGet } from '../api/index'

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => apiGet(urlCustomers));

