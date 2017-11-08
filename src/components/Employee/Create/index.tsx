/*
    Employee creation component to show employee form & submit entered data & more
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { employeeUpdate, employeeCreate } from '../../../actions';
import {
    Input,
    Spinner
} from '../../../common'

import EmployeeProps from './interface';
import mapStateToProps from './mapToProps';

class EmployeeCreate extends React.Component<EmployeeProps, any> {
    // Call api to save employee on submit of form
    onButtonPress() {
        const { name, phone, shift, error } = this.props;

        this.props.employeeCreate({ name, phone, shift });
    }

    // Update employee store with inputed details of employee
    employeeUpdate(event: any) {
        this.props.employeeUpdate({ prop: event.target.id, value: event.target.value })
    }

    // Show error if there is any
    showError() {
        if (this.props.error) {
            return (
                <div className="row">
                    <div className="card-panel red lighten-5 error-message">
                        <span className="red-text">{this.props.error}</span>
                    </div>
                </div>
            )
        }
    }

    // Display success if user logegd in successfully
    showSuccess() {
        if (this.props.success) {
            return (
                <div className="row">
                    <div className="success-container card-panel green lighten-5 success-message">
                        <span className="green-text">Employee created successfully</span>
                    </div>
                </div>
            )
        }
    }

    // Show spinner or button depends on api running status
    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        }

        return (
            <button className="btn"
                onClick={this.onButtonPress.bind(this)}>
                Add
            </button>
        )
    }

    render() {
        const { name, phone, shift } = this.props;

        return (
            <div className="card employee-create">
                <div className="card-content">
                    <div className="row header">
                        <span className="card-title">Add Employee</span>

                        <Link className="btn grey lighten-3 black-text" to="/employee">
                            Back to employee list
                        </Link>
                    </div>

                    {this.showError()}
                    {this.showSuccess()}

                    <div className="row">
                        <Input
                            inputType="text"
                            id="name"
                            label="Name"
                            placeholder="Jane"
                            value={name}
                            onInput={this.employeeUpdate.bind(this)} />
                    </div>

                    <div className="row">
                        <Input
                            inputType="text"
                            id="phone"
                            label="Phone"
                            placeholder="99-999-99999"
                            value={phone}
                            onInput={this.employeeUpdate.bind(this)} />
                    </div>

                    <div className="row">
                        <label>Materialize Select</label>
                        <select className="browser-default"
                            id="shift"
                            onChange={this.employeeUpdate.bind(this)}
                            value={shift}>
                            <option value="" disabled>Choose Shift</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <div className="row">
                        {this.renderButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate));