import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';

import './index.css';
import App from './components/js/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
