import * as React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import LoginForm from './components/Login/';
import EmployeeList from './components/Employee/List';
import EmployeeCreate from './components/Employee/Create';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginForm} />
                <Route exact path="/employee" component={EmployeeList} />
                <Route path="/employee-create" component={EmployeeCreate} />
            </Switch>
        </Router>
    )
}

export default RouterComponent