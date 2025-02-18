import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/main.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("No element with id 'root' found in index.html");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
