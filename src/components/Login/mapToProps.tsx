/*
    Change login store to props, which can be used to reflect changs in login view
*/
const mapStateToProps = ({ auth }: { auth: any }) => {
    const { email, password, error, loading, success } = auth;
    return {
        email,
        password,
        error,
        loading,
        success
    }
}

export default mapStateToProps;