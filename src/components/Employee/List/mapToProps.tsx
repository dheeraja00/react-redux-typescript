/*
    Converting employee list state to props to be used in employee component
*/
// Lodash used to convert object to array list
import * as _ from 'lodash';

const mapStateToProps = (state: any) => {
    const { loading } = state.employees;

    const employees = _.map(state.employees.list, (val: any, uid: any) => {
        return { ...val, uid };
    })
    return { employees, loading };
}

export default mapStateToProps;