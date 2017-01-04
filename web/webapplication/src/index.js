import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';
import {BrowserRouter as Router, Match} from 'react-router';
import * as firebase from 'firebase';

const config = {
};

firebase.initializeApp(config);

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Match exactly pattern="/" component={App}/>
        </Router>
    </Provider>
    ,
    root
);
