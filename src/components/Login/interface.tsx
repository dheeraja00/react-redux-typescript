/*
    Interface for login props
*/
export default interface LoginProps {
    email: string,
    emailChanged: any,
    error: string,
    loginUser: any,
    loading: boolean,
    password: string,
    passwordChanged: any,
    success: boolean
}