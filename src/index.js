import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Redux/store/store';
import './index.css';

// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Render the app with the Redux store wrapped in the Provider component
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
