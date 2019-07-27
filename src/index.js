import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseContextExample from './UseContextExample';
import UseRefExample from './UseRefExample'
import UseReducerExample from './UseReducerExample'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UseReducerExample/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
