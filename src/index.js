import React from 'react';
import ReactDOM from 'react-dom/client';
import './core/style/index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './core/router/routes';
import { Provider } from 'react-redux';
import { store } from './core/state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);