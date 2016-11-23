import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
// import {BrowserRouter as Router, Link, Match, Miss} from 'react-router';
import {BrowserRouter as Router, Match} from 'react-router';

const store = createStore(reducers);

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
