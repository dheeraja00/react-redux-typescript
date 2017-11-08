/*
    Employee create: This is a store for employee creation & handles different actions of creation
*/

import { 
    API_CALLED,
    EMPLOYEE_CREATE,
    EMPLOYEE_ERROR,
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE: any = {
    error: '',
    loading: false,
    name: '',
    phone: '',
    shift: '',
    success: false
};

export default (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value, error: '', success: false };
        case EMPLOYEE_CREATE:
            return { ...INITIAL_STATE, success: true, loading: false };
        case API_CALLED:
            return { ...state, loading: true, error: '' };
        case EMPLOYEE_ERROR:
            return { ...state, loading: false, error: 'All fields are mandatory' };
        default:
            return state;
    }
}