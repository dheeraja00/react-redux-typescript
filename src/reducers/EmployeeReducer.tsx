/*
    Reducer for listing created employees
*/

import { 
    EMPLOYEE_FETCHING,
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    list: {},
    loading: false
};

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        case EMPLOYEE_FETCHING:
            return { ...state, list: {}, loading: true }
        default:
            return state;
    }
}