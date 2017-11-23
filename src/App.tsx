/*
    App entry point, below are the operations to be done here: 
        Attach store, Init firebase, Add routing & render the app
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import routing packages to navigate user to specific route
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
// Imported required package to create store & attach multiple middlewares to store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Thunk is a great tool to delay dispatch from actions, which is handy when dealing with http request
import ReduxThunk from 'redux-thunk';
// Firebase package to make api calls for login & getting & adding employees
import * as firebase from 'firebase';

// Combined reducers for reducer page
import reducers from './reducers';

// Different routes present in project
import LoginForm from './components/Login/';
import EmployeeList from './components/Employee/List';
import EmployeeCreate from './components/Employee/Create';

class App extends React.Component {
    componentWillMount() {
        // Init firebase
        const config = {
            apiKey: 'AIzaSyD8G8Oa_NFagD4qTzBL4oYpd3GKhZAwoh8',
            authDomain: 'manager-b5a79.firebaseapp.com',
            databaseURL: 'https://manager-b5a79.firebaseio.com',
            projectId: 'manager-b5a79',
            storageBucket: 'manager-b5a79.appspot.com',
            messagingSenderId: '803570514791'
        };

        firebase.initializeApp(config);
    }

    render () {
        // Store creation where reducers & middlewares are attached
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider
                store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route exact path="/employee" component={EmployeeList} />
                        <Route path="/employee-create" component={EmployeeCreate} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

// Rendered app to root element
ReactDOM.render(
    <App />,
    document.getElementById('root')
)