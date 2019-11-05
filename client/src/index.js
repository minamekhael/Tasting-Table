import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './Routes.jsx';
import './index.css';
import '../semantic/dist/semantic.min.css';
import './stylesheets/application.css'

const store = createStore(
    reducers,
    applyMiddleware(thunk),
  );

ReactDOM.render(
      <Provider store={store}>
        {App}
      </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
