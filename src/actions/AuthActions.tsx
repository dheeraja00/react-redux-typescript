/*
    Login action creator, to dispatch specific actions on specifc call
    Like: email or password changed, fire login user api & success call
*/

import * as React from 'react';
import * as firebase from 'firebase';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

// dispatch action when email is changed to update login store
export const emailChanged = (text: any) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

// dispatch action when password is changed to update login store
export const passwordChanged = (text: any) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

// Fire login api & dispatch different actions depending on the api state
export const loginUser = ({ email, password }: { email: string, password: string }) => {
    return (dispatch: any) => {
        // Show loader
        dispatch({ type: LOGIN_USER });

        // Sign in api, if successful then dispatch success action
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => {
                // If password is wrong show error
                if (err.code === 'auth/wrong-password') {
                    loginUserFail(dispatch, err.message)
                } else {
                    // If user is not present then create new account with email & password
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => loginUserSuccess(dispatch, user))
                        .catch((err) => loginUserFail(dispatch, err.message))
                }

            })
    }
}

// Dispatch action on failure
const loginUserFail = (dispatch: any, err: any) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: err
    })
}

// Dispatch action on login
const loginUserSuccess = (dispatch: any, user: any) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}