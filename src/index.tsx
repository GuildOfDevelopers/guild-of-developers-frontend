import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Global from './lib/styled/styled';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Global />
    <App />
  </>
);
