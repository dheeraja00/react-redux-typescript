/*
    Employee action creator, to fetch & submit employees and dispatch specific actions on specifc calls
*/

import * as firebase from 'firebase';

import {
    API_CALLED,
    EMPLOYEE_CREATE,
    EMPLOYEE_ERROR,
    EMPLOYEE_FETCHING,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_UPDATE
} from './types';

// Dispatch update function to update employee store with inserted employee values
export const employeeUpdate = ({ prop, value }: { prop: string, value: string }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

// Fire employee create api to store employee & dispatch different actions like success, fail or load
export const employeeCreate = ({ name, phone, shift }: { name: string, phone: string, shift: string }) => {
    const { currentUser } = firebase.auth();

    return (dispatch: any) => {
        if (!name || !phone || !shift) {
            dispatch({ type: EMPLOYEE_ERROR })
        } else {
            dispatch({ type: API_CALLED });
            firebase.database().ref(`/users/${currentUser.uid}/employees`)
                .push({ name, phone, shift })
                .then(() => {
                    dispatch({ type: EMPLOYEE_CREATE });
                })
        }
    };
}

// Fire employee get api to get whole employee list
export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch: any) => {
        dispatch({type: EMPLOYEE_FETCHING});
        
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            })
    }
}