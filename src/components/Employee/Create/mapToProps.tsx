/*
    Mapping employee state to props
*/
const mapStateToProps = (state: any) => {
    const { name, phone, shift, error, loading, success } = state.employeeForm;

    return { name, phone, shift, error, loading, success };
}

export default mapStateToProps;