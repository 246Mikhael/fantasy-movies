import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter} from 'react-router-dom';
import { createBrowserHistory} from "history";

export const history = createBrowserHistory(); //исп. истории браузера

const root = ReactDOM.createRoot(document.getElementById('root'));

// стор - история браузера - роутер

root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
          <App />   
    </BrowserRouter> 
  </Provider>
);