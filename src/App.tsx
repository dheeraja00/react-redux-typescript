/*
    App entry point, below are the operations to be done here: 
        Attach store, Init firebase, Add routing & render the app
*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Imported required package to create store & attach multiple middlewares to store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Thunk is a great tool to delay dispatch from actions, which is handy when dealing with http request
import ReduxThunk from 'redux-thunk';
// Firebase package to make api calls for login & getting & adding employees
import * as firebase from 'firebase';

// Combined reducers for reducer page
import reducers from './reducers';
// Router contains all path added in app
import Router from './Router';

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
                <Router />
            </Provider>
        )
    }
}

// Rendered app to root element
ReactDOM.render(
    <App />,
    document.getElementById('root')
)