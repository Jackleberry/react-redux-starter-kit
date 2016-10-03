import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import root from './reducers/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const initialState = {};

const store = createStore(combineReducers({
  root
}), initialState, window.devToolsExtension && window.devToolsExtension());

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'));
};

store.subscribe(render);
render();
