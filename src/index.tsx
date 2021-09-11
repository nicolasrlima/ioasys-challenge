import React from 'react';

import ReactDOM from 'react-dom';

import { AuthProvider } from 'contexts/AuthContext';

import '@fontsource/heebo';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
