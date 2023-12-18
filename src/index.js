import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import UserStore from "./Strore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={UserStore}>
    <App />
  </Provider>
);

