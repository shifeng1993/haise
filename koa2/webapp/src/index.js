import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores';
import routes from './routes';

let store = configureStore();
let rootElement = document.getElementById('root');

// Render the main component into the dom
ReactDOM.render(
    <div>
    <Provider store={store}>
        {routes}
    </Provider>
</div>, rootElement);