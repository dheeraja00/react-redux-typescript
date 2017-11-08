/*
    Employee list component to view all created employees, also provide option to create new employee
*/

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// Action for employee
import { employeesFetch } from '../../../actions';

import { Spinner } from '../../../common';

// Employee interface(prop types) & map to state function
import EmployeeProps from './interface';
import mapStateToProps from './mapToProps';

class EmployeeList extends React.Component<EmployeeProps, any> {
    // Fetch all saved employees when component mounts
    componentWillMount() {
        this.props.employeesFetch();
    }

    // Render every single employee to the view from the fetched employee list
    renderRow(employee: any) {
        return (
            <li key={employee.uid} className="collection-item">
                <div className="employee-info">
                    <strong className="title">{employee.name}</strong>
                    <span className="phone">{employee.phone}</span>
                </div>

                <label>Shift: <strong>{employee.shift}</strong></label>
            </li>
        )
    }

    // Function to get called when employee list api is running
    showLoader() {
        if(this.props.loading) {
            return (
                <li className="collection-item">
                    <Spinner />
                </li>
            )
        }
    }

    render() {
        return (
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4>Employees</h4>

                    <Link className="btn" to="/employee-create">Create new</Link>
                </li>

                {this.showLoader()}

                {
                    this.props.employees.map((employee: any) => {
                        return this.renderRow(employee)
                    })
                }
            </ul>
        )
    }
}

export default withRouter(connect(mapStateToProps, { employeesFetch })(EmployeeList));