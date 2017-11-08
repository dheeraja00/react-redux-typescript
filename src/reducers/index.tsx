/*
    Common place to import all the reducers of app & combine
*/

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,
    routing: routerReducer
})